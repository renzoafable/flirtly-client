import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signUp } from '../../api/auth';
import { SignupFormResponse } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  signUp({
    username,
    password,
    firstName,
    middleName,
    lastName,
    contactNumber,
    emailAddress,
    sex,
    city,
    province
  }) {
    const body = {
      username,
      password,
      firstName,
      middleName,
      lastName,
      contactNumber,
      emailAddress,
      sex,
      city,
      province
    }

    return this.http.post<SignupFormResponse>(signUp, body, { withCredentials: true });
  }
}
