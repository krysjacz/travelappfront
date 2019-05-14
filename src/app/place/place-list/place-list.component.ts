import {Component, OnInit} from '@angular/core';
import {Place} from '../place.model';
import {PlaceService} from '../place.service';


@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {
  places: Place[] = [];

  constructor(private placeService: PlaceService) {
  }

  ngOnInit() {
    this.placeService.getAllPlaces().subscribe(
      (places: Place[]) => {
        this.places = places;
      },
      (error) => {
        console.log(error);
      });
  }

}
