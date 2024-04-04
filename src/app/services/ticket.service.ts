import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from './login.service';
import { Ticket } from '../store/tickets/tickets.model';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private store = inject(Store);
  private http = inject(HttpClient);

  getTickets() {
    return this.http.get<Ticket[]>(`${BASE_URL}/tickets`);
  }
}
