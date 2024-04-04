import { createSelector } from '@ngrx/store';
// import { LoginState } from './user.model';
import { AppStore } from '../model/store.model';
import { User as UserState } from './user.model';

export const selectUserState = (state: AppStore) => state.user;

export const selectName = createSelector(
  selectUserState,
  (state: UserState) => state.name
);

export const selectLogin = createSelector(
  selectUserState,
  (state: UserState) => state.login
);
