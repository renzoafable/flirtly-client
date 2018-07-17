import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxAutoScrollModule } from 'ngx-auto-scroll';
import { MessagesComponent } from './messages.component';
import { MessageComponent } from './message/message.component';
import { FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3001', options: {} };

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxAutoScrollModule,
    SocketIoModule.forRoot(config)
  ],
  declarations: [MessagesComponent, MessageComponent]
})
export class MessagesModule { }
