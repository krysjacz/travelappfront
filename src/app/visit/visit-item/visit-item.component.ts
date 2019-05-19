import {Component, Input, OnInit} from '@angular/core';
import {Visit} from '../visit.model';
import {Place} from '../../place/place.model';
import {VisitService} from '../visit.service';
import {PlaceService} from '../../place/place.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-visit-item',
  templateUrl: './visit-item.component.html',
  styleUrls: ['./visit-item.component.css']
})
export class VisitItemComponent implements OnInit {
  @Input() visit: Visit;
  place: Place;
  comment: Comment;

  isAlertOpen: boolean;
  responseStatus: number;
  settingVisitAsVisited = false;
  routeUrl: any;



  constructor(private visitService: VisitService, private placeService: PlaceService, private route: ActivatedRoute) {
    this.place = new Place();
    this.comment = new Comment();
  }

  ngOnInit() {
    this.routeUrl = this.route.snapshot.url.toString();
    this.placeService.getPlaceById(this.visit.placeId).subscribe(
      (response) => {
        this.place = response.body;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onDeletePlaceToVisit() {
    this.visitService.deleteVisit(this.visit.id).subscribe(
      (response) => {
        this.responseStatus = response.status;
        if (this.responseStatus === 200) {
          this.visitService.visitListChanged.next();
        }
      },
      (error) => {
        this.responseStatus = error.status;
        if (this.responseStatus === 0) {
        } else if (this.responseStatus === 409) {
          this.responseStatus = 2;
        }
      }
    );
    this.isAlertOpen = true;
  }

  setVisitAsVisited() {
      this.visitService.setVisitAsVisited(this.visit.id).subscribe(
        (response) => {
          this.responseStatus = response.status;
          if (this.responseStatus === 200) {
            this.visitService.visitListChanged.next();
          }
        },
        (error) => {
          this.responseStatus = error.status;
        }
      );
      this.isAlertOpen = true;
    }
}
