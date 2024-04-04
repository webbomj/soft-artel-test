import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Store } from '@ngrx/store';
import {
  selectTickets,
  selectTicketsIsLoadin,
} from '../../store/tickets/tickets.selectors';
import { beginLoadTickets } from '../../store/tickets/tickets.actions';
import { NgFor, NgIf } from '@angular/common';
import { Ticket } from '../../store/tickets/tickets.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, NgIf, NgFor],
  templateUrl: './home.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private store = inject(Store);

  tickets = this.store.selectSignal(selectTickets);
  isLoadingTickets = this.store.selectSignal(selectTicketsIsLoadin);

  ngOnInit(): void {
    this.store.dispatch(beginLoadTickets());
  }

  columnsToDisplay = ['id', 'title', 'createdAt'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Ticket | null = null;
}
