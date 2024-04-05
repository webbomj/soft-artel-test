import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import * as LoginActions from '../login/login.actions';
import * as UserActions from '../user/user.actions';
import { Router } from '@angular/router';
import { LocalstorageService } from '../../services/localstorage.service';
import { UserService } from '../../services/user.service';

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
          return UserActions.getUser({
            birthday: user.birthday,
            city: user.city,
            id: Number(user.city),
            login: user.login,
            name: user.login,
            password: user.password,
            secondName: user.secondName,
          });
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

export const _getAllUsers = createEffect(
  (
    actions$ = inject(Actions),
    router = inject(Router),
    userService = inject(UserService)
  ) => {
    return actions$.pipe(
      ofType(UserActions.beginGetUsers),
      exhaustMap(() =>
        userService.getUsers().pipe(
          map((rawUsers) => {
            const users = rawUsers.map((user) => {
              return {
                ...user,
                id: Number(user.id),
              };
            });
            return UserActions.getAllUsers({ users: users });
          }),
          catchError(() =>
            of(LoginActions.errorLogin({ message: 'users: not exists' }))
          )
        )
      )
    );
  },

  { functional: true }
);
