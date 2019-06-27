import { Component, OnInit } from '@angular/core';
import { UserClass } from 'src/app/classes/user.class';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  user: UserClass;

  constructor(
    private websocketService: WebsocketService
  ) { }

  ngOnInit() {
    this.user = this.websocketService.user;
  }

}
