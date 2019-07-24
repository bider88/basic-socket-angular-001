import { Component, OnInit } from '@angular/core';
import { UserClass } from 'src/app/classes/user.class';
import { WebsocketService } from 'src/app/services/websocket.service';
import { ChatService } from 'src/app/services/chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  user: UserClass;
  userList: Observable<UserClass[]>;

  constructor(
    private websocketService: WebsocketService,
    private chatService: ChatService
  ) { }

  ngOnInit() {
    this.user = this.websocketService.getUser();
    this.listenUserActives();
  }

  listenUserActives() {
    this.userList = this.chatService.getUserActives();
    this.chatService.getUserList();
  }

}
