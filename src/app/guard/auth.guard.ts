import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LocalstorageService } from '../services/localstorage.service';

export const authGuard: CanActivateFn = (_route, _state) => {
  const router = inject(Router);
  const localStorageService = inject(LocalstorageService);

  const user = localStorageService.getUser();

  if (user && user.login !== '' && user.login !== null) {
    return true;
  }

  router.navigate(['login']);
  return false;
};
