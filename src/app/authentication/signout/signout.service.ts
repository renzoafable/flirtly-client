import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { signOut } from '../../api/auth';

@Injectable({
  providedIn: 'root'
})
export class SignoutService {

  constructor(private httpClient: HttpClient) { }

  private isSignedOutSource = new Subject<boolean>();

  isSignedOut$ = this.isSignedOutSource.asObservable();

  announceSignOut() {
    this.isSignedOutSource.next(false);
  }

  signOut() {
    return this.httpClient.post<any>(signOut, {});
  }
}
