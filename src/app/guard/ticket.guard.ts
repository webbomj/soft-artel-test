import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  beginLoadTickets,
  selecteTicket,
} from '../store/tickets/tickets.actions';
import { selectTickets } from '../store/tickets/tickets.selectors';
import { filter, map, startWith } from 'rxjs';
import { Ticket } from '../store/tickets/tickets.model';

export const ticketGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const store = inject(Store);
  const rawId: string = route.params?.['id'];
  const id: number = Number(rawId);

  if (Number.isNaN(id)) {
    router.navigate(['']);
    return false;
  }

  store.dispatch(beginLoadTickets());

  return store.select(selectTickets).pipe(
    startWith([] as Ticket[]),
    filter((tickets) => tickets.length > 0),
    map((tickets) => {
      return tickets.find((ticket) => ticket.id === id);
    }),
    map((ticket) => {
      if (ticket) {
        store.dispatch(selecteTicket({ id: id }));
        return true;
      } else {
        router.navigate(['']);
        return false;
      }
    })
  );
};
