import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../store/user/user.model';
import * as UserActions from '../store/user/user.actions';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private store = inject(Store);
  private http = inject(HttpClient);

  setUserToStore(user: User) {
    this.store.dispatch(UserActions.getUser(user));
  }

  getUsers() {
    return this.http.get<(Omit<User, 'id'> & { id: string })[]>(
      `${BASE_URL}/users`
    );
  }
}
