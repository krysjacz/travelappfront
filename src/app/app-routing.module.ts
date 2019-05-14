import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {Home2Component} from './home2/home2.component';
import {PlaceListComponent} from './place/place-list/place-list.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home2', component: Home2Component},
  {path: 'places', component: PlaceListComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
