import { createReducer, on } from '@ngrx/store';
import { type UserState } from './user.model';
import * as UserActions from './user.actions';

export const initialState: UserState = {
  allUsers: [],
  profileId: null,
  user: null,
};

const _userReducer = createReducer(
  initialState,
  on(UserActions.getUser, (state, action) => ({
    ...state,
    user: {
      id: action.id,
      birthday: action.birthday,
      city: action.city,
      login: action.login,
      name: action.name,
      password: action.password,
      secondName: action.secondName,
    },
  })),
  on(UserActions.getAllUsers, (state, action) => ({
    ...state,
    allUsers: action.users,
  })),
  on(UserActions.getProfileId, (state, action) => ({
    ...state,
    profileId: action.id,
  }))
);

export function UserReducer(state: any, action: any) {
  return _userReducer(state, action);
}
