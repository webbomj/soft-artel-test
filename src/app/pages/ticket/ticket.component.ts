import { Component, computed, inject, input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  beginLoadTickets,
  selecteTicket,
} from '../../store/tickets/tickets.actions';
import { selectedTicket } from '../../store/tickets/tickets.selectors';
import { MatCardModule } from '@angular/material/card';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [
    MatCardModule,
    NgIf,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
  ],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss',
})
export class TicketComponent {
  private store = inject(Store);
  private router = inject(Router);
  id = input<string>();

  ticket = this.store.selectSignal(selectedTicket);

  createdAtDate = computed(() => new Date(this.ticket()!.createdAt));
}
