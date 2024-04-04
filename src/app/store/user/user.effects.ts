import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of } from 'rxjs';
import * as LoginActions from '../login/login.actions';
import * as UserActions from '../user/user.actions';
import { Router } from '@angular/router';
import { LocalstorageService } from '../../services/localstorage.service';

export const _successLoginUser = createEffect(
  (
    actions$ = inject(Actions),
    router = inject(Router),
    localstorage = inject(LocalstorageService)
  ) => {
    return actions$.pipe(
      ofType(LoginActions.successLogin),
      map((user) => {
        if (user.login !== '' && user.login !== null) {
          localstorage.setUser(user);
          router.navigate(['/']);
          return UserActions.getUser(user);
        }
        throw Error('User doesnt exist');
      }),
      catchError((error: { message: string }) =>
        of(LoginActions.errorLogin({ message: error.message }))
      )
    );
  },
  { functional: true }
);
