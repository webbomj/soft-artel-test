import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../store/user/user.model';
import * as UserActions from '../store/user/user.actions';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  store = inject(Store);

  setUserToStore(user: User) {
    this.store.dispatch(UserActions.getUser(user));
  }
}
