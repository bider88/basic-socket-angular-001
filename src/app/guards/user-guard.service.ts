import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { WebsocketService } from '../services/websocket.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate {

  constructor(
    private websocketService: WebsocketService,
    private router: Router
  ) { }

  canActivate() {
    const user = this.websocketService.getUser();

    if (user) {
      return !!user;
    }
    this.router.navigateByUrl('');
    return false;
  }
}
