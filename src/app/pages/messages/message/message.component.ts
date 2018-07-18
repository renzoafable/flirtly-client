import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() user;
  @Input() chat;

  constructor() { }

  ngOnInit() { 
    this.chat.timeSent = moment(this.chat.timeSent).fromNow();
  }

  setListClass(senderID) {
    return this.user.userID === senderID ? 'right clearfix' : 'left clearfix';
  }

  setChatImgClass(senderID) {
    return this.user.userID === senderID ? 'chat-img pull-right' : 'chat-img pull-left'
  }

  setHeaderClass(senderID) {
    return this.user.userID === senderID ? 'header pull-right sender-message' : 'header'
  }

  setTimeClass(senderID) {
    return this.user.userID === senderID ? 'text-muted pull-left' : 'text-muted pull-right';
  }

  setChatAvatar(senderID) {
    return this.user.userID === senderID ?
    'http://placehold.it/50/FA6F57/fff&text=ME' : 
    `http://placehold.it/50/00ff00/fff&text=${[...this.chat.senderName][0]}`;
  }
}
