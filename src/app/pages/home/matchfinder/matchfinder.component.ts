import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models';
import { HomeService } from '../home.service';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { NgxAutoScroll } from 'ngx-auto-scroll';

@Component({
  selector: 'app-matchfinder',
  templateUrl: './matchfinder.component.html',
  styleUrls: ['./matchfinder.component.css']
})
export class MatchfinderComponent implements OnInit {
  mouseEntered: boolean;
  isGettingUsers: boolean;
  users: User[] = [];
  userCookie = null;
  requestApprovedSubscription: Subscription;
  requestCancelledSubscription: Subscription;
  pendingCancelledSubscription: Subscription;

  constructor(
    private homeService: HomeService,
    private cookieService: CookieService,
    private router: Router
  ) {
    this.requestCancelledSubscription = this.homeService.requestCancelled$.subscribe(
      () => {
        this.homeService.getUsers().subscribe(
          result => {
            this.users = result.data;
          },
          err => {
            console.log(err.error);
          }
        )
      }
    );

    this.pendingCancelledSubscription = this.homeService.pendingCancelled$.subscribe(
      () => {
        this.homeService.getUsers().subscribe(
          result => {
            this.users = result.data;
          },
          err => {
            console.log(err.error);
          }
        )
      }
    );

    this.requestApprovedSubscription = this.homeService.requestApproved$.subscribe(
      () => {
        this.homeService.getUsers().subscribe(
          result => {
            this.users = result.data;
          },
          err => {
            console.log(err.error);
          }
        )
      }
    );
  }

  ngOnInit() {
    this.userCookie = JSON.parse(this.cookieService.get('user'));
    this.isGettingUsers = true;
    this.homeService.getUsers().subscribe(
      result => {
        this.users = result.data;
        this.isGettingUsers = false;
      },
      err => {
        console.log(err.error);
      }
    )
  }

  setCarouselClass(i:number) {
    return i == 0 ? 'item active' : 'item';
  }

  sendRequest(connectionID: number) {
    this.homeService.sendRequest(connectionID).subscribe(
      () => {
        this.homeService.getUsers().subscribe(
          result => {
            this.users = result.data;
            this.homeService.announceRequest();
          }
        )
      },
      err => {
        console.log(err.error);
      }
    )
  }

  onMouseEnter() {
    this.mouseEntered = !this.mouseEntered;
    console.log(this.mouseEntered);
  }
}
