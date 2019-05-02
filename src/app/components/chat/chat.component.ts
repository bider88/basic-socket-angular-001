import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Subscription } from 'rxjs';
import { PayloadInterface } from 'src/app/interfaces/payload.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

  text = '';
  subscriptor: Subscription;
  messages: PayloadInterface[] = [];
  scrollTop: number;
  @ViewChild('messageRef') messageRef: ElementRef;

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
    if (this.text.trim().length) {
      this.chatService.sendMessage(this.text);
    }
    this.text = '';
  }

  receive() {
    this.subscriptor = this.chatService.receiveMessage().subscribe(
      (msg: PayloadInterface) =>  {
        this.messages.push(msg);

        setTimeout(() => this.messageRef.nativeElement.scrollTop = this.messageRef.nativeElement.scrollHeight, 0);
      }
    );
  }

}
