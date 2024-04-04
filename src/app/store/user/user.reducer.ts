import { createReducer, on } from '@ngrx/store';
import { type User as UserState } from './user.model';
import * as LoginPageActions from './user.actions';

export const initialState: UserState = {
  birthday: '',
  city: '',
  id: '',
  login: '',
  name: '',
  password: '',
  secondName: '',
};

const _userReducer = createReducer(
  initialState,
  on(LoginPageActions.getUser, (state, action) => ({
    ...state,
    ...action,
  }))
);

export function UserReducer(state: any, action: any) {
  return _userReducer(state, action);
}
