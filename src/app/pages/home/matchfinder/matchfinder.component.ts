import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../models';
import { HomeService } from '../home.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-matchfinder',
  templateUrl: './matchfinder.component.html',
  styleUrls: ['./matchfinder.component.css']
})
export class MatchfinderComponent implements OnInit {
  users: User[];

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.homeService.getUsers().subscribe(
      result => {
        this.users = result.users[0];
      },
      err => {
        console.log(err.error);
      }
    )
  }

  setCarouselClass(i:number) {
    return i == 0 ? 'item active' : 'item';
  }

  setCarouselButtonHtml(confirmed) {
    switch(confirmed) {
      case 1:
        return 'Remove connection';
      case 0:
        return 'Cancel request';
      case null:
        return 'Send request';
    }
  }

  sendRequest(connectionID: number) {
    this.homeService.sendRequest(connectionID).subscribe(
      result => {
        this.users = result.users;
        console.log(this.users);
      },
      err => {
        console.log(err.error);
      }
    )
  }
}
