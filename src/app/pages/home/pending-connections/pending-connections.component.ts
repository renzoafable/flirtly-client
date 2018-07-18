import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { WebsocketService } from '../../../websocket.service';
import { CookieService } from '../../../../../node_modules/ngx-cookie-service';
import { User } from '../../../models';

@Component({
  selector: 'app-pending-connections',
  templateUrl: './pending-connections.component.html',
  styleUrls: ['./pending-connections.component.css']
})
export class PendingConnectionsComponent implements OnInit {
  isGettingPendingConnections: boolean;
  pending = [];
  user: User;

  constructor(
    private homeService: HomeService,
    private socketService: WebsocketService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(this.cookieService.get('user'));
    this.isGettingPendingConnections = true;
    this.homeService.getReceivedConnections().subscribe(
      result => {
        this.pending = result.data;
        this.isGettingPendingConnections = false
      },
      err => {
        console.log(err.error);
      }
    );

    this.socketService.onEvent(`receiveSentRequest/${this.user.userID}`).subscribe(result => {
      this.pending.push(result);
    });

    this.socketService.onEvent(`receiveCancelledRequest/${this.user.userID}`).subscribe(result => {
      this.pending = this.pending.filter(request => request.userID !== result.userID);
    });
  }

  setCarouselClass(i:number) {
    return i == 0 ? 'item active' : 'item';
  }

  approveRequest(userID) {
    this.homeService.approveRequest(userID).subscribe(
      result => {
        this.homeService.announceApproveRequest();
        this.pending = result.data;
      },
      err => {
        console.log(err.error);
      }
    )
  }

  deleteRequest(userID) {
    this.homeService.deletePendingRequest(userID).subscribe(
      result => {
        this.homeService.announceCancelPending();
        this.pending = result.data;
      },
      err => {
        console.log(err.error);
      }
    )
  }
}
