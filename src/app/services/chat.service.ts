import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { PayloadInterface } from '../interfaces/payload.interface';
import { Observable } from 'rxjs';
import { UserClass } from '../classes/user.class';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private websocketService: WebsocketService
  ) { }

  sendMessage(body: string) {
    const payload: PayloadInterface = {
      from: this.websocketService.getUser().name,
      body
    };

    console.log(`Sending message...`, payload);

    this.websocketService.emit('message', payload);
  }

  receiveMessage() {
    return this.websocketService.listen('newMessage');
  }

  receivePrivateMessage() {
    return this.websocketService.listen('private-message');
  }

  getUserActives(): Observable<UserClass[]> {
    return this.websocketService.listen('user-actives') as Observable<UserClass[]>;
  }

  getUserList() {
    this.websocketService.emit('user-list');
  }

}
