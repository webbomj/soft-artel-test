import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Store } from '@ngrx/store';
import {
  selectTickets,
  selectTicketsIsLoadin,
} from '../../store/tickets/tickets.selectors';
import {
  beginLoadTickets,
  selecteTicket,
} from '../../store/tickets/tickets.actions';
import { Ticket } from '../../store/tickets/tickets.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss',
})
export class TicketsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'createdAt'];
  private store = inject(Store);
  private router = inject(Router);

  tickets = this.store.selectSignal(selectTickets);
  isLoadingTickets = this.store.selectSignal(selectTicketsIsLoadin);

  ngOnInit(): void {
    this.store.dispatch(beginLoadTickets());
  }

  navigateToTicket(ticket: Ticket) {
    const id = ticket.id;

    this.store.dispatch(selecteTicket({ id: id }));

    this.router.navigate([`ticket/${id}`]);
  }
}
