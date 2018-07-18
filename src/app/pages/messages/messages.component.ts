import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { MessagesService } from './messages.service';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { WebsocketService } from './websocket.service';
import * as moment from 'moment';
import { User, ActiveContact } from '../../models';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  user: User;
  connections = [];
  chats = [];
  activeContact: ActiveContact;
  message = '';
  activeChatColor;
  gluedToBottom: boolean = true;
  sendMessageSubscription: Subscription;

  ioConnection: any;

  constructor(
    private homeService: HomeService,
    private messageService: MessagesService,
    private cookieService: CookieService,
    private socketService: WebsocketService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(this.cookieService.get('user'));
    this.homeService.getUserConnections().subscribe(
      result => {
        this.connections = result.data;
        if (this.connections[0]) {
          this.activeContact = {
            connectionID: this.connections[0].connectionID,
            connectionName: this.connections[0].firstName
          }
          this.messageService.getChats(this.connections[0].connectionID).subscribe(
            result => {
              this.chats = result.data;
            },
            err => {
              console.log(err.error);
            }
          )
        }
      },
      err => {
        console.log(err.error);
      }
    );

    this.socketService.onEvent(`message/${this.user.userID}`).subscribe(result => {
      this.chats.push(result);
    })
  }

  setPlaceHolder(firstName, lastName) {
    firstName = [...firstName][0];
    lastName = [...lastName][0];
    return `http://placehold.it/35/00ff00/fff&text=${firstName + lastName}`;
  }

  openMessage(connectionID, firstName) {
    this.activeContact = {
      connectionID,
      connectionName: firstName
    };
    this.messageService.getChats(connectionID).subscribe(
      result => {
        this.chats = result.data;
      },
      err => {
        console.log(err.error);
      }
    );
  }

  sendChat() {
    const { message } = this;
    const messageBody = {
      message: message,
      receiverID: this.activeContact.connectionID,
      receiverName: this.activeContact.connectionName,
      senderID: this.user.userID,
      senderName: this.user.firstName,
      timeSent: Date.now()
    }
    this.messageService.sendChat(this.activeContact.connectionID, this.message).subscribe(
      () => {
        this.socketService.sendMessage(messageBody);
        this.chats.push(messageBody);
      }
    )
  }
}
