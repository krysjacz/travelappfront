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

  isAlertOpen: boolean;
  responseStatus: number;

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

  onAddVisit() {
    this.placeService.addVisit(this.place.id).subscribe(
      (response) => {
        this.responseStatus = response.status;
        if (this.responseStatus === 200) {
          console.log('gitowa');
        }
      },
      (error) => {
        this.responseStatus = error.status;
      }
    );
    this.isAlertOpen = true;
  }




}
