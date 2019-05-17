import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Place} from '../place.model';
import {PlaceService} from '../place.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  places: Place[] = [];
  place: Place;
  lat: number = 52.25;
  lng: number = 21;
  message = 'nic';

  public mapStyles = [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    }
  ];


  constructor(private placeService: PlaceService, private route: ActivatedRoute) {
    this.place = new Place();
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

  changeCoordinates(latitude: number, longitude: number) {
    this.lat = latitude;
    this.lng = longitude;
  }
}
