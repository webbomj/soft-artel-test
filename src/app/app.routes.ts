import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './guard/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { profileGuard } from './guard/profile.guard';
import { ticketGuard } from './guard/ticket.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard],
    data: {
      breadcrumb: 'Home',
    },
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    canActivate: [authGuard, profileGuard],
    data: {
      breadcrumb: 'Profile id',
    },
  },
  {
    path: 'tickets',
    component: TicketsComponent,
    canActivate: [authGuard],
    data: {
      breadcrumb: 'Tickets',
    },
  },
  {
    path: 'ticket/:id',
    component: TicketComponent,
    canActivate: [authGuard, ticketGuard],
    data: {
      breadcrumb: 'Ticket id',
    },
  },
  { path: '**', component: PageNotFoundComponent },
];
