import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user/user.model';
import {TokenService} from '../token.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient, private tokenService: TokenService,
              private router: Router) {
  }

  signupUser(user: User) {
      return this.httpClient.post('http://localhost:8080/user/register', user, {
        observe: 'response', responseType: 'json'
      });
  }

  signinUser(username: string, password: string) {
    return this.httpClient.post('http://localhost:8080/user/login'
      , {username, password}
      , {observe: 'response', responseType: 'json'}
    );
  }

  logout() {
    this.tokenService.delete();
    this.router.navigate(['/']);
  }

  isAuthenticated() {
    if (this.tokenService.retrieve() !== null) {
      return true;
    } else {
      return false;
    }
  }


}
