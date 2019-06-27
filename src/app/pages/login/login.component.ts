import { Component, OnInit } from '@angular/core';
import { UserClass } from 'src/app/classes/user.class';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: string;
  user: UserClass;

  constructor(
    private websocketService: WebsocketService
  ) { }

  ngOnInit() {
  }

  login() {
    if (this.name && this.name.trim().length) {
      console.log(this.name);
      // this.user = new UserClass(this.name);
      this.websocketService.loginWS(this.name);
    }
  }

}
