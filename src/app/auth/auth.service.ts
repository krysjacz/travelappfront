import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user/user.model';

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  signupUser(user: User) {
      return this.httpClient.post('http://localhost:8080/user/register', user, {
        observe: 'response', responseType: 'json'
      });

  }


}
