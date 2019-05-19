import {Component, OnDestroy, OnInit} from '@angular/core';
import {Visit} from '../visit.model';
import {Subscription} from 'rxjs';
import {VisitService} from '../visit.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-visit-list',
  templateUrl: './visit-list.component.html',
  styleUrls: ['./visit-list.component.css']
})
export class VisitListComponent implements OnInit, OnDestroy {
  visits: Visit[] = [];
  routeUrl = '';

  subscription: Subscription;

  isAlertOpen: boolean;
  responseStatus: number;

  constructor(private visitService: VisitService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.routeUrl = this.route.snapshot.url.toString();

    if (this.routeUrl === 'placesToVisit') {
      this.visitService.getNotVisitedPlaces().subscribe(
        (visits: Visit[]) => {
          this.visits = visits;
        },
        (error) => {
          console.log(error);
        }
      );
    } else if (this.routeUrl === 'placesVisited') {
      this.visitService.getVisitedPlaces().subscribe(
        (visits: Visit[]) => {
          this.visits = visits;
        },
        (error) => {
          console.log(error);
        }
      );
    }

    this.subscription = this.visitService.visitListChanged.subscribe(
      (response) => {
        if (this.routeUrl === 'placesToVisit') {
          this.visitService.getNotVisitedPlaces().subscribe(
            (visits: Visit[]) => {
              this.visits = visits;
            },
            (error) => {
              console.log(error);
            }
          );
        } else if (this.routeUrl === 'placesVisited') {
          this.visitService.getVisitedPlaces().subscribe(
            (visits: Visit[]) => {
              this.visits = visits;
            },
            (error) => {
              console.log(error);
            }
          );
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
