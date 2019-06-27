import { Component, OnInit } from '@angular/core';
import { UserClass } from 'src/app/classes/user.class';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: string;
  user: UserClass;

  constructor(
    private websocketService: WebsocketService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    if (this.name && this.name.trim().length) {
      console.log(this.name);
      this.websocketService.loginWS(this.name).then(
        () => this.router.navigateByUrl('/messages'),
        () => console.error('An error has ocurred')
      );
    }
  }

}
