import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SigninService } from './authentication/signin/signin.service';
import { SignoutService } from './authentication/signout/signout.service';
import { SessionService } from './authentication/session/session.service';
import { Subscription } from 'rxjs';

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
  showAlert: boolean = true;
  message;
  alertAnnouncedSubscription: Subscription;

  constructor(
    private signinService: SigninService,
    private signoutService: SignoutService,
    private sessionService: SessionService,
    private cookieService: CookieService,
    private router: Router
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
    if (this.isLoggedIn) this.router.navigateByUrl('/home');
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
