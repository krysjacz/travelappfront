import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class PlaceService {



  constructor(private httpClient: HttpClient) {
  }

  getAllPlaces() {
    return this.httpClient.get('http://localhost:8080/travelapp/place/all', {});
  }


}
