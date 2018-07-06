import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SigninForm } from '../../models';
import { SigninService } from './signin.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  validCredentials: boolean = false;

  body: SigninForm = {
    username: '',
    password: ''
  }

  constructor(
    private signinService: SigninService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
  }

  signin() {
    this.signinService.signIn(this.body)
    .subscribe(
      result => {
        this.validCredentials = true;
        this.signinService.announceSignIn(this.validCredentials);
        this.cookieService.set('user', JSON.stringify(result.session));
      },
      err => {
        this.validCredentials = false;
        this.signinService.announceSignIn(this.validCredentials);
        console.log(err.error);
      }
    )
  }
}
