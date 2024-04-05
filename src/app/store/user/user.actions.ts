import { createAction, props } from '@ngrx/store';
import { User } from './user.model';

export const GET_USER = '[user] get user';
export const BEGIN_GET_USERS = '[user] begin get all users';
export const GET_ALL_USERS = '[user] get all users';
export const GET_PROFILE_ID = '[user] get profile id';

export const getUser = createAction(GET_USER, props<User>());
export const beginGetUsers = createAction(BEGIN_GET_USERS);
export const getAllUsers = createAction(
  GET_ALL_USERS,
  props<{ users: User[] }>()
);

export const getProfileId = createAction(
  GET_PROFILE_ID,
  props<{ id: number }>()
);
