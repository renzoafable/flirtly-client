import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../../models';
import { signIn } from '../../api/auth';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  

  constructor(
    private http: HttpClient,
  ) {}
  
  private isSignedInSource = new Subject<boolean>();

  isSignedIn$ = this.isSignedInSource.asObservable();

  announceSignIn(signedIn: boolean) {
    this.isSignedInSource.next(signedIn);
  }

  signIn({username, password}) {
    const body = { username, password };

    return this.http.post<Response>(signIn, body, {withCredentials: true});
  }
}
