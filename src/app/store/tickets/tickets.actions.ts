import { createAction, props } from '@ngrx/store';
import { Ticket } from './tickets.model';

export const BEGIN_LOAD_TICKETS = '[tickets] begin load tickets';
export const TICKETS_LOAD_ERROR = '[tickets] tickets load error';
export const TICKETS_LOAD_SUCCESS = '[tickets] tickets load success';
export const SELECTE_TICKET = '[tickets] selecte ticket';

export const beginLoadTickets = createAction(BEGIN_LOAD_TICKETS);
export const ticketsLoadSuccess = createAction(
  TICKETS_LOAD_SUCCESS,
  props<{ tickets: Ticket[] }>()
);
export const ticketsLoadError = createAction(TICKETS_LOAD_ERROR);
export const selecteTicket = createAction(
  SELECTE_TICKET,
  props<{ id: number }>()
);
