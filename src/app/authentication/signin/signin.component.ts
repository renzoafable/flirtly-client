import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SigninForm } from '../../models';
import { SigninService } from './signin.service';

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
  ) { }

  ngOnInit() {
  }

  signin() {
    this.signinService.signIn(this.body)
    .subscribe(
      result => {
        this.validCredentials = true;
        this.signinService.announceSignIn(this.validCredentials);
      },
      err => {
        this.validCredentials = false;
        this.signinService.announceSignIn(this.validCredentials);
        console.log(err.error);
      }
    )
  }
}
