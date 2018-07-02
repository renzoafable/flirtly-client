import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getSession } from '../../api/auth';
import { SessionResponse } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient: HttpClient) { }

  getSession() {
    let  headers = new HttpHeaders();
    headers = headers.append('withCredentials', 'true');
    const httpOptions = {
      headers: headers
    };
    return this.httpClient.post<SessionResponse>(getSession, {}, { withCredentials: true });
  }
}
