import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getChats, sendChat } from '../../api/user';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(
    private http: HttpClient
  ) { }

  getChats(connectionID) {
    return this.http.get<any>(getChats(connectionID), {withCredentials: true});
  }

  sendChat(connectionID, message) {
    return this.http.post<any>(sendChat(connectionID), {message}, {withCredentials: true});
  }
}
