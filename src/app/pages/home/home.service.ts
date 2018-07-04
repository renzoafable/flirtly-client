import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { InterestResponse, UserResponse } from '../../models';
import { getUserInterests, addInterests, getUsers, requestConnection } from '../../api/user';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  getUserInterests() {
    return this.http.get<InterestResponse>(getUserInterests, {withCredentials: true});
  }

  addInterest(interests) {
    return this.http.post<InterestResponse>(addInterests, {interests}, {withCredentials: true});
  }

  getUsers() {
    return this.http.get<UserResponse>(getUsers, {withCredentials: true});
  }

  sendRequest(connectionID) {
    return this.http.post<UserResponse>(requestConnection(connectionID), {}, {withCredentials: true});
  }
 }
