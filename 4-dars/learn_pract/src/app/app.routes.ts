import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { authGuard, unSavedChangesGuard, UserDetails } from './user-details/user-details';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'login',
    component: Login
  },

  {
    path: 'user/:id',
    component: UserDetails,
    canActivate: [authGuard],
    canDeactivate: [unSavedChangesGuard]
  }
];
