import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {TokenService} from '../../token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  isAlertOpen: boolean;
  responseStatus: number;

  constructor(private authService: AuthService, private tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    this.authService.signinUser(form.value.username, form.value.password)
      .subscribe(
        (response) => {
          this.responseStatus = response.status;
          if (this.responseStatus === 200) {
            const userData = {
              id: response.headers.get('UserId'),
              admin: response.headers.get('Admin'),
              token: response.headers.get('Token'),
              username: form.value.username
            };
            this.tokenService.store(userData);
            this.router.navigate(['/']);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    this.isAlertOpen = true;
  }

}
