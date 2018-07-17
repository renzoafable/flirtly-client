import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io'
import { Subject, Observable } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  constructor(private socket: Socket) { }

  sendMessage(message) {
    this.socket.emit('message', message);
  }

  onEvent(event): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on(event, (data) => observer.next(data));
    });
  }
}
