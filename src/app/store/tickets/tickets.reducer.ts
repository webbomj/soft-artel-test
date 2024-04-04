import { createReducer, on } from '@ngrx/store';
import * as TicketsPageAction from './tickets.actions';
import { TicketState } from './tickets.model';

export const initialState: TicketState = {
  isLoading: false,
  tickets: [],
};

const _ticketsReducer = createReducer(
  initialState,
  on(TicketsPageAction.ticketsLoadSuccess, (state, action) => ({
    ...state,
    tickets: [...action.tickets],
    isLoading: false,
  })),
  on(TicketsPageAction.beginLoadTickets, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(TicketsPageAction.ticketsLoadError, (state) => ({
    ...state,
    isLoading: false,
  }))
);

export function TicketsReducer(state: any, action: any) {
  return _ticketsReducer(state, action);
}
