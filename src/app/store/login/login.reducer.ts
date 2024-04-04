import { createReducer, on } from '@ngrx/store';
import { LoginState } from './login.model';
import * as LoginPageActions from './login.actions';

export const initialState: LoginState = {
  isLoading: false,
  hasError: false,
  error: {
    message: '',
  },
};

const _loginReducer = createReducer(
  initialState,
  on(LoginPageActions.beginLogin, (state) => ({ ...state, isLoading: true })),
  on(LoginPageActions.successLogin, (state) => ({
    ...state,
    isLoading: false,
    hasError: false,
    error: {
      message: '',
    },
  })),
  on(LoginPageActions.errorLogin, (state, action) => ({
    ...state,
    isLoading: false,
    hasError: true,
    error: {
      message: action.message,
    },
  }))
);

export function LoginReducer(state: any, action: any) {
  return _loginReducer(state, action);
}
