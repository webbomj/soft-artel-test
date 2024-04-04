import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LocalstorageService } from '../services/localstorage.service';
import { Store } from '@ngrx/store';
import { selectUserState } from '../store/user/user.selectors';
import { UserService } from '../services/user.service';

export const authGuard: CanActivateFn = (_route, _state) => {
  const router = inject(Router);
  const localStorageService = inject(LocalstorageService);

  const store = inject(Store);
  const userService = inject(UserService);

  const userInLocalStorage = localStorageService.getUser();
  const userInStore = store.selectSignal(selectUserState);

  const isUserExist =
    userInLocalStorage &&
    userInLocalStorage.login !== '' &&
    userInLocalStorage.login !== null;

  if (isUserExist) {
    userService.setUserToStore(userInLocalStorage);
  }

  if (userInStore() && userInStore().login !== '') {
    return true;
  }

  router.navigate(['login']);
  return false;
};
