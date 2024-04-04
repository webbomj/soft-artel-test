import { createAction, props } from '@ngrx/store';
import { User } from './user.model';

export const GET_USER = '[user] get user';

export const getUser = createAction(GET_USER, props<User>());
