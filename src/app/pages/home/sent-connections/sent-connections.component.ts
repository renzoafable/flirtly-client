import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Subscription } from 'rxjs';
import { User } from '../../../models';
import { CookieService } from '../../../../../node_modules/ngx-cookie-service';
import { WebsocketService } from '../../../websocket.service';

@Component({
  selector: 'app-sent-connections',
  templateUrl: './sent-connections.component.html',
  styleUrls: ['./sent-connections.component.css']
})
export class SentConnectionsComponent implements OnInit {
  user: User;
  isGettingSentConnections: boolean;
  sent = [];
  requestAnnouncedSubscription: Subscription;

  constructor(
    private homeService: HomeService,
    private cookieService: CookieService,
    private socketService: WebsocketService
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
    this.user = JSON.parse(this.cookieService.get('user'));
    this.isGettingSentConnections = true;
    this.homeService.getSentConnections().subscribe(
      result => {
        this.sent = result.data;
        this.isGettingSentConnections = false
      },
      err => {
        console.log(err.error);
      }
    );

    this.socketService.onEvent(`sendRequest/${this.user.userID}`).subscribe(result => {
      this.sent.push(result);
    });

    this.socketService.onEvent(`cancelRequest/${this.user.userID}`).subscribe(result => {
      this.sent = this.sent.filter(request => request.connectionID !== result.connectionID);
    });
  }

  setCarouselClass(i: number) {
    return i == 0 ? 'item active' : 'item';
  }

  deleteSentRequest(connectionID) {
    const { userID } = this.user;
    const requestBody = {
      connectionID,
      userID
    }
    this.homeService.deleteSentRequest(connectionID).subscribe(
      result => {
        this.socketService.cancelRequest(requestBody);
        this.homeService.announceCancelRequest();
        this.sent = result.data;
      },
      err => {
        console.log(err.error);
      }
    );
  }
}
