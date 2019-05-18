import {Component, OnInit, TemplateRef} from '@angular/core';
import {User} from '../../user/user.model';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
// import {BsModalRef, BsModalService} from 'ngx-bootstrap';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isAlertOpen: boolean;
  responseStatus: number;


  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  onSingup(form: NgForm) {

      const user = new User(null, form.value.username, form.value.password, null, null);
      this.authService.signupUser(user)
        .subscribe(
          (response) => {
            this.responseStatus = response.status;
            if (this.responseStatus === 200) {
              console.log('git');
            }
          },
          (error) => {
            this.responseStatus = error.status;
          }
        );
      form.reset();

      this.isAlertOpen = true;
  }
}
