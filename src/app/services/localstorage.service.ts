import { Injectable } from '@angular/core';
import { User } from '../store/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  private authKey = 'authKey';

  setUser(user: User) {
    localStorage.removeItem(this.authKey);
    const jsonUser = this.convertUserToJson(user);
    localStorage.setItem(this.authKey, jsonUser);
  }

  getUser() {
    const DirtyUser = localStorage.getItem(this.authKey);
    if (DirtyUser) {
      const user = JSON.parse(DirtyUser) as User;
      return user;
    }
    return null;
  }

  private convertUserToJson(user: User) {
    return JSON.stringify(user);
  }
}
