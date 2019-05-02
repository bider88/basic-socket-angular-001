import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  text = '';

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit() {
  }

  send() {
    this.chatService.sendMessage(this.text);
    this.text = '';
  }

}
