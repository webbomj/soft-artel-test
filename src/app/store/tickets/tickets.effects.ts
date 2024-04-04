import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import * as TickesAction from '../tickets/tickets.actions';
import { TicketService } from '../../services/ticket.service';

export const _getTickets = createEffect(
  (actions$ = inject(Actions), ticketService = inject(TicketService)) => {
    return actions$.pipe(
      ofType(TickesAction.beginLoadTickets),
      exhaustMap(() =>
        ticketService.getTickets().pipe(
          map((tickets) =>
            TickesAction.ticketsLoadSuccess({ tickets: tickets })
          ),
          catchError(() => of(TickesAction.ticketsLoadError()))
        )
      )
    );
  },
  { functional: true }
);
