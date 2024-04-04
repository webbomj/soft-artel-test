import { createSelector } from '@ngrx/store';
import { LoginState } from './login.model';
import { AppStore } from '../model/store.model';

export const selectLoadingState = (state: AppStore) => state.login;

export const selectIsError = createSelector(
  selectLoadingState,
  (state: LoginState) => state.hasError
);

export const selectError = createSelector(
  selectLoadingState,
  (state: LoginState) => state.error?.message
);

export const selectIsLoading = createSelector(
  selectLoadingState,
  (state: LoginState) => state.isLoading
);
