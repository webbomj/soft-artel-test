import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LoginService } from '../../services/login.service';
import { catchError, exhaustMap, map, of } from 'rxjs';
import * as LoginActions from './login.actions';
import * as UserActions from '../user/user.actions';

export const _login = createEffect(
  (actions$ = inject(Actions), loginService = inject(LoginService)) => {
    return actions$.pipe(
      ofType(LoginActions.beginLogin),
      exhaustMap((action) =>
        loginService.login(action).pipe(
          map((user) => {
            if (user[0]) {
              return LoginActions.successLogin(user[0]);
            } else {
              throw Error('Login or password incorrect');
            }
          }),
          catchError((error: { message: string }) =>
            of(LoginActions.errorLogin({ message: error.message }))
          )
        )
      )
    );
  },
  { functional: true }
);
