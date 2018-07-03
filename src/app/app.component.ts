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
    SignoutService,
    CookieService
  ]
})
export class AppComponent implements OnInit {
  isLoggedIn: Boolean = false;
  title = 'app';

  constructor(
    private signinService: SigninService,
    private signoutService: SignoutService,
    private sessionService: SessionService,
    private cookieService: CookieService,
  ) {
    signinService.isSignedIn$.subscribe(result => {
      this.setSession(result);
    });

    signoutService.isSignedOut$.subscribe(result => {
      this.setSession(result);
    });
  }

  setSession(result) {
    this.isLoggedIn = result;
  }

  ngOnInit(): void {
    this.sessionService.getSession().subscribe(session => {
      if (session.session) {
        this.cookieService.set('user', JSON.stringify(session.session), 24);
        this.isLoggedIn = true;
      }
    });
  }
}
