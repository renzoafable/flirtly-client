import { Component, OnInit } from '@angular/core';
import { SignupForm } from '../../models';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted = false;
  body: SignupForm = {
    username: '',
    password: '',
    firstName: '',
    middleName: '',
    lastName: '',
    contactNumber: '',
    emailAddress: '',
    sex: '',
    city: '',
    province: ''
  }

  constructor(private signupService: SignupService) { }

  ngOnInit() {
  }

  signup() {
    this.signupService.signUp(this.body).subscribe(
      result => {
        this.submitted = true;
        console.log(result);
      },
      err => {
        console.log(err.error);
      }
    )
  }
}
