import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sent-connections',
  templateUrl: './sent-connections.component.html',
  styleUrls: ['./sent-connections.component.css']
})
export class SentConnectionsComponent implements OnInit {
  isGettingSentConnections: boolean;
  sent = [];
  requestAnnouncedSubscription: Subscription;

  constructor(
    private homeService: HomeService
  ) { 
    this.requestAnnouncedSubscription = homeService.requestAnnounced$.subscribe(
      () => {
        this.homeService.getSentConnections().subscribe(
          result => {
            this.sent = result.data;
          },
          err => {
            console.log(err.error)
          }
        )
      }
    )
  }

  ngOnInit() {
    this.isGettingSentConnections = true;
    this.homeService.getSentConnections().subscribe(
      result => {
        this.sent = result.data;
        this.isGettingSentConnections = false
      },
      err => {
        console.log(err.error);
      }
    )
  }

  setCarouselClass(i:number) {
    return i == 0 ? 'item active' : 'item';
  }

  deleteSentRequest(connectionID) {
    this.homeService.deleteSentRequest(connectionID).subscribe(
      result => {
        this.homeService.announceCancelRequest();
        this.sent = result.data;
      },
      err => {
        console.log(err.error);
      }
    );
  }
}
