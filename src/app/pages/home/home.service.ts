import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { InterestResponse } from '../../models';
import { getUserInterests } from '../../api/interest';

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
}
