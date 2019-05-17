import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Place} from '../place.model';
import {PlaceService} from '../place.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {

  place: Place;

  constructor(private placeService: PlaceService, private route: ActivatedRoute) {
    this.place = new Place();
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        const id = params['id'];
        this.placeService.getPlaceById(id).subscribe(
          (response) => {
            this.place = response.body;
          },
          (error) => {
            console.log(error);
          }
        );
      }
    );
  }




}
