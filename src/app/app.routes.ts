import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './guard/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [authGuard] },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    canActivate: [authGuard],
  },
  { path: '**', component: PageNotFoundComponent },
];
