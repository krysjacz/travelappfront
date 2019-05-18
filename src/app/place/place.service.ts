import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Place} from './place.model';
import {TokenService} from '../token.service';


@Injectable()
export class PlaceService {



  constructor(private httpClient: HttpClient, private tokenService: TokenService) {
  }

  getAllPlaces() {
    return this.httpClient.get('http://localhost:8080/travelapp/place/all', {
      headers: new HttpHeaders({
        'Token': this.tokenService.getUserToken()
      })
    });
  }

  getPlaceById(id: number) {

      return this.httpClient.get<Place>('http://localhost:8080/travelapp/place/' + id, {
        headers: new HttpHeaders({
          'Token': this.tokenService.getUserToken()
        }),
        observe: 'response', responseType: 'json'});
    }
}
