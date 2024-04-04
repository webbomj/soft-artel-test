import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './guard/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { TicketComponent } from './pages/ticket/ticket.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [authGuard] },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    canActivate: [authGuard],
  },
  {
    path: 'tickets',
    component: TicketsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'ticket/:id',
    component: TicketComponent,
    canActivate: [authGuard],
  },
  { path: '**', component: PageNotFoundComponent },
];
