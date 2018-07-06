import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-pending-connections',
  templateUrl: './pending-connections.component.html',
  styleUrls: ['./pending-connections.component.css']
})
export class PendingConnectionsComponent implements OnInit {
  isGettingPendingConnections: boolean;
  pending = [];

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.isGettingPendingConnections = true;
    this.homeService.getReceivedConnections().subscribe(
      result => {
        this.pending = result.receivedConnections;
        this.isGettingPendingConnections = false
      },
      err => {
        console.log(err.error);
      }
    )
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
