import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
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
import {FormsModule} from '@angular/forms';
import {AuthService} from './auth/auth.service';
import {TokenService} from './token.service';
import { VisitItemComponent } from './visit/visit-item/visit-item.component';
import { VisitListComponent } from './visit/visit-list/visit-list.component';
import {AccordionModule} from 'ngx-bootstrap';




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
    SignupComponent,
    VisitItemComponent,
    VisitListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCdg9F-dSztEEmaJUd5gSbUgAUTCM8pOes'
    }),
    FormsModule,
    AccordionModule
  ],
  providers: [AuthService, TokenService, PlaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
