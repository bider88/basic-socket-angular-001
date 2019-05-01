import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  socketStatus = false;

  constructor(
    private socket: Socket
  ) {
    this.verifyStatus();
  }

  verifyStatus() {
    this.socket.on('connect', () => {
      console.log('Connected at server');

      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected at server');

      this.socketStatus = false;
    });
  }
}
