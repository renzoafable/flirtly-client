import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  constructor(private socket: Socket) { }

  sendMessage(message) {
    this.socket.emit('message', message);
  }

  sendRequest(request) {
    this.socket.emit('sendRequest', request);
  }

  cancelRequest(request) {
    this.socket.emit('cancelRequest', request);
  }

  onEvent(event): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on(event, (data) => observer.next(data));
    });
  }
}
