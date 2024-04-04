import { createAction, props } from '@ngrx/store';
import { User, UserAuthData } from '../user/user.model';

export const BEGIN_LOGIN = '[auth] begin login';
export const SUCCESS_LOGIN = '[auth] success login';
export const ERROR_LOGIN = '[auth] error login';

export const beginLogin = createAction(BEGIN_LOGIN, props<UserAuthData>());
export const successLogin = createAction(SUCCESS_LOGIN, props<User>());
export const errorLogin = createAction(
  ERROR_LOGIN,
  props<{ message: string }>()
);
