import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { PayloadInterface } from '../interfaces/payload.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private websocketService: WebsocketService
  ) { }

  sendMessage(body: string) {
    const payload: PayloadInterface = {
      from: 'Didier',
      body
    };

    console.log(`Sending message...`, payload);

    this.websocketService.emit('message', payload);
  }
}
