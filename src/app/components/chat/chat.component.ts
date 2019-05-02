import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

  text = '';
  subscriptor: Subscription;

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit() {
    this.receive();
  }

  ngOnDestroy() {
    this.subscriptor.unsubscribe();
  }

  send() {
    this.chatService.sendMessage(this.text);
    this.text = '';
  }

  receive() {
    this.subscriptor = this.chatService.receiveMessage().subscribe(
      msg => console.log(`Receiving message...`, msg)
    );
  }

}
