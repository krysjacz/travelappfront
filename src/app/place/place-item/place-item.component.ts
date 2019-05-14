import {Component, Input, OnInit} from '@angular/core';
import {Place} from '../place.model';


@Component({
  selector: 'app-place-item',
  templateUrl: './place-item.component.html',
  styleUrls: ['./place-item.component.css']
})
export class PlaceItemComponent implements OnInit {
  @Input() place: Place;

  constructor() { }

  ngOnInit() {
  }

}
