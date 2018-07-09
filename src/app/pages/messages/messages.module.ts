import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxAutoScrollModule } from 'ngx-auto-scroll';
import { MessagesComponent } from './messages.component';
import { MessageComponent } from './message/message.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxAutoScrollModule
  ],
  declarations: [MessagesComponent, MessageComponent]
})
export class MessagesModule { }
