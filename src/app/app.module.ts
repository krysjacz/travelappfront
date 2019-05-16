import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PlaceListComponent } from './place/place-list/place-list.component';
import { PlaceItemComponent } from './place/place-item/place-item.component';
import { PlaceDetailsComponent } from './place/place-details/place-details.component';
import { PlacesComponent } from './place/places/places.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { PlaceService } from './place/place.service';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    PlaceListComponent,
    PlaceItemComponent,
    PlaceDetailsComponent,
    HomeComponent,
    HeaderComponent,
    PlacesComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [PlaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
