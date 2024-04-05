import { createSelector } from '@ngrx/store';
// import { LoginState } from './user.model';
import { AppStore } from '../model/store.model';
import { UserState } from './user.model';

export const selectUserState = (state: AppStore) => state.user;

export const selectUsers = createSelector(
  selectUserState,
  (state: UserState) => state.allUsers
);

export const selectProfileId = createSelector(
  selectUserState,
  (state: UserState) => state.profileId
);

export const selectName = createSelector(
  selectUserState,
  (state: UserState) => state.user
);

export const selectLogin = createSelector(
  selectUserState,
  (state: UserState) => state.user?.login
);

export const selectUser = createSelector(
  selectUserState,
  (state: UserState) => {
    const user = state.allUsers.find((user) => user.id === state.profileId);
    return user;
  }
);
