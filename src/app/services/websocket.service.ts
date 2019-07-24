import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BodyResponse } from '../interfaces/body-response.interface';
import { UserClass } from '../classes/user.class';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  socketStatus = false;
  private user: UserClass;

  constructor(
    private socket: Socket,
    private router: Router
  ) {
    this.loadStorage();
    this.verifyStatus();
  }

  verifyStatus() {
    this.socket.on('connect', () => {
      console.log('Connected at server');
      this.socketStatus = true;
      this.loadStorage();
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected at server');

      this.socketStatus = false;
    });
  }

  emit(event: string, payload?: any, callback?: Function) {
    this.socket.emit(event, payload, callback);
  }

  listen(event: string) {
    return this.socket.fromEvent( event );
  }

  loginWS(name: string) {

    return new Promise((resolve, reject) => {
      console.log('user-configuration', name);
      this.emit('user-configuration', { name }, (res: BodyResponse) => {
        console.log(res);
        if (res.ok) {
          this.user = res.user;
          this.saveStorage();
          resolve();
        } else {
          reject();
        }
      });
    });
  }

  logoutWS() {
    this.user = null;
    localStorage.removeItem('user');
    this.emit('user-configuration', {name : 'no name'}, () => {});
    this.router.navigateByUrl('');
  }

  getUser() {
    return this.user;
  }

  saveStorage() {
    if (this.user) {
      localStorage.setItem('user', JSON.stringify(this.user));
    }
  }

  loadStorage() {
    const user: string = localStorage.getItem('user');
    if (user) {
      this.user = JSON.parse(user);
      this.loginWS(this.user.name);
    }
  }
}
