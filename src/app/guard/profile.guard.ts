import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { beginGetUsers, getProfileId } from '../store/user/user.actions';
import { selectUsers } from '../store/user/user.selectors';
import { filter, map, startWith } from 'rxjs';
import { User } from '../store/user/user.model';

export const profileGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const store = inject(Store);
  const rawId: string = route.params?.['id'];
  const id: number = Number(rawId);

  if (Number.isNaN(id)) {
    router.navigate(['']);
    return false;
  }

  store.dispatch(beginGetUsers());

  return store.select(selectUsers).pipe(
    startWith([] as User[]),
    filter((users) => users.length > 0),
    map((users) => {
      return users.find((user) => user.id === id);
    }),
    map((user) => {
      if (user) {
        store.dispatch(getProfileId({ id: id }));
        return true;
      } else {
        router.navigate(['']);
        return false;
      }
    })
  );
};
