import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {PlacesComponent} from './place/places/places.component';
import {PlaceDetailsComponent} from './place/place-details/place-details.component';
import {AuthGuardService} from './auth/auth-guard.service';
import {VisitListComponent} from './visit/visit-list/visit-list.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {
    path: 'places', component: PlacesComponent, canActivate: [AuthGuardService],
    children: [
      {path: ':id', component: PlaceDetailsComponent}
    ]
  },
  {path: 'placesToVisit', component: VisitListComponent, canActivate: [AuthGuardService]},
  {path: 'placesVisited', component: VisitListComponent, canActivate: [AuthGuardService]}

];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class AppRoutingModule {
}
