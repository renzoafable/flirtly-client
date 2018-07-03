import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  user: Object;

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.user = JSON.parse(this.cookieService.get('user'));
  }

}
