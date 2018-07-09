import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';
import { Subscription } from 'rxjs';
import { MessagesService } from '../../messages/messages.service';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css']
})
export class ConnectionsComponent implements OnInit {
  isGettingConnections: boolean;
  connections = []
  requestApprovedSubscription: Subscription;

  constructor(
    private homeService: HomeService,
    private router: Router
  ) { 
    this.requestApprovedSubscription = this.homeService.requestApproved$.subscribe(
      requestApproved => {
        this.homeService.getUserConnections().subscribe(
          result => {
            this.connections = result.connections;
          },
          err => {
            console.log(err.error);
          }
        );
      }
    );
  }

  ngOnInit() {
    this.isGettingConnections = true;
    this.homeService.getUserConnections().subscribe(
      result => {
        this.connections = result.connections;
        this.isGettingConnections = false;
      },
      err => {
        console.log(err.error);
      }
    )
  }

  setCarouselClass(i:number) {
    return i == 0 ? 'item active' : 'item';
  }

  sendMessage() {
    this.router.navigateByUrl('/messages');
  }
}
