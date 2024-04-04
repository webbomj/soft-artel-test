import { createSelector } from '@ngrx/store';
import { AppStore } from '../model/store.model';
import { TicketState } from './tickets.model';

export const selectTicketsState = (state: AppStore) => state.tickets;

export const selectTickets = createSelector(
  selectTicketsState,
  (state: TicketState) => state.tickets
);

export const selectTicketsIsLoadin = createSelector(
  selectTicketsState,
  (state: TicketState) => state.isLoading
);
