import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Place} from './place.model';


@Injectable()
export class PlaceService {



  constructor(private httpClient: HttpClient) {
  }

  getAllPlaces() {
    return this.httpClient.get('http://localhost:8080/travelapp/place/all', {});
  }

  getPlaceById(id: number) {

      return this.httpClient.get<Place>('http://localhost:8080/travelapp/place/' + id, {observe: 'response', responseType: 'json'});
    }
}
