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
      requestCanlled => {
        this.homeService.getUsers().subscribe(
          result => {
            this.users = result.users.filter(user => user.confirmed === null);
          },
          err => {
            console.log(err.error);
          }
        )
      }
    );

    this.pendingCancelledSubscription = this.homeService.pendingCancelled$.subscribe(
      pendingCancelled => {
        this.homeService.getUsers().subscribe(
          result => {
            this.users = result.users.filter(user => user.confirmed === null);
          },
          err => {
            console.log(err.error);
          }
        )
      }
    );

    this.requestApprovedSubscription = this.homeService.requestApproved$.subscribe(
      requestApproved => {
        this.homeService.getUsers().subscribe(
          result => {
            this.users = result.users.filter(user => user.confirmed === null);
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
        this.users = result.users.filter(user => user.confirmed === null);
        console.log(this.users);
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
      result => {
        this.users = result.users.filter(user => user.confirmed === null);
        this.homeService.announceRequest();
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
