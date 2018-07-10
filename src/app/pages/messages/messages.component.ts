import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { MessagesService } from './messages.service';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  user;
  connections = [];
  chats = [];
  activeContact;
  message = '';
  activeChatColor;
  gluedToBottom: boolean = true;
  sendMessageSubscription: Subscription;

  constructor(
    private homeService: HomeService,
    private messageService: MessagesService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(this.cookieService.get('user'));
    this.homeService.getUserConnections().subscribe(
      result => {
        this.connections = result.data;
        if (this.connections[0]) {
          this.messageService.getChats(this.connections[0].connectionID).subscribe(
            result => {
              result.data.map(chat => {
                chat.chatColor = this.connections[0].chatColor;
              })
              this.chats = result.data;
              this.activeContact = this.connections[0].connectionID
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
  }

  setPlaceHolder(firstName, lastName, chatColor) {
    firstName = [...firstName][0];
    lastName = [...lastName][0];
    return `http://placehold.it/35/${chatColor}/fff&text=${firstName+lastName}`;
  }

  openMessage(connectionID, chatColor) {
    this.activeContact = connectionID;
    this.activeChatColor = chatColor;
    this.messageService.getChats(connectionID).subscribe(
      result => {
        result.data.map(chat => {
          chat.chatColor = chatColor;
        });
        this.chats = result.data;
      },
      err => {
        console.log(err.error);
      }
    );
  }

  sendChat() {
    this.messageService.sendChat(this.activeContact, this.message).subscribe(
      () => {
        this.messageService.getChats(this.activeContact).subscribe(
          result => {
            result.data.map(chat => {
              chat.chatColor = this.activeChatColor;
            });
            this.chats = result.data;
          },
          err => {
            console.log(err.error);
          }
        )
      }
    )
  }
}
