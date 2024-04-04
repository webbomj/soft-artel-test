import { createSelector } from '@ngrx/store';
import { AppStore } from '../model/store.model';
import { Ticket, TicketState } from './tickets.model';

export const selectTicketsState = (state: AppStore) => state.tickets;

export const selectTickets = createSelector(
  selectTicketsState,
  (state: TicketState) => state.tickets
);

export const selectTicketsIsLoadin = createSelector(
  selectTicketsState,
  (state: TicketState) => state.isLoading
);

export const selectedTicket = createSelector(
  selectTicketsState,
  selectTickets,
  (state: TicketState, tickets: Ticket[]) => {
    const ticket = tickets.find((ticket) => ticket.id === state.selectedTicket);
    return ticket ? ticket : null;
  }
);
