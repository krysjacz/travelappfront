import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenService} from '../token.service';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitService {
  visitListChanged = new Subject<null>();

  constructor(private httpClient: HttpClient, private tokenService: TokenService) {
  }

  getVisitedPlaces() {
    return this.httpClient.get('http://localhost:8080/visit/myVisitedPlaces/' + this.tokenService.getUserId(), {
      headers: new HttpHeaders({
        'Token': this.tokenService.getUserToken()
      })
    });
  }

  getNotVisitedPlaces() {
    return this.httpClient.get('http://localhost:8080/visit/myNotVisitedPlaces/' + this.tokenService.getUserId(), {
      headers: new HttpHeaders({
        'Token': this.tokenService.getUserToken()
      })
    });
  }

  deleteVisit(visitId: number) {
      return this.httpClient.delete('http://localhost:8080/visit/deleteVisit/' + visitId + '/'
        + this.tokenService.getUserId(), {
        headers: new HttpHeaders({
          'Token': this.tokenService.getUserToken()
        }),
        observe: 'response', responseType: 'json'
      });
  }

  setVisitAsVisited(visitId: number) {
      return this.httpClient.put('http://localhost:8080/visit/setAsVisited/' + visitId + '/'
        + this.tokenService.getUserId(), {
         visitId: visitId, userId: this.tokenService.getUserId()
      }, {
        headers: new HttpHeaders({
          'Token': this.tokenService.getUserToken()
        }),
        observe: 'response', responseType: 'json'
      });
  }


}
