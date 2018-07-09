import { Component, OnInit, Input } from '@angular/core';
import { Interest } from '../../../../models';
import { HomeService } from '../../home.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {
  @Input() interest;
  @Input() iter;
  user;

  styles = [
    'label label-primary',
    'label label-success',
    'label label-info',
    'label label-warning',
    'label label-danger'
  ];

  constructor(
    private homeService: HomeService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(this.cookieService.get('user'));
  }

  deleteInterest(interestID) {
    this.homeService.deleteInterest(interestID).subscribe(
      result => {
        this.homeService.announceDeleteInterest();
      },
      err => {
        console.log(err.error);
      }
    )
  }
}
