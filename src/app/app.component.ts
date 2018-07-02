import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { SigninService } from './authentication/signin/signin.service';
import { SignoutService } from './authentication/signout/signout.service';
import { SessionService } from './authentication/session/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    SigninService,
    SignoutService
  ]
})
export class AppComponent implements OnInit {
  isLoggedIn: Boolean;
  title = 'app';

  constructor(
    private cookieService: CookieService,
    private signinService: SigninService,
    private signoutService: SignoutService,
    private sessionService: SessionService
  ) {
    signinService.isSignedIn$.subscribe(result => {
      this.setSession(result);
    });

    signoutService.isSignedOut$.subscribe(result => {
      this.setSession(false);
    });
  }

  setSession(result) {
    this.isLoggedIn = result;
  }

  ngOnInit() {
    this.sessionService.getSession().subscribe(session => {
      session ? this.isLoggedIn = true : this.isLoggedIn = false;
    });
  }
}
