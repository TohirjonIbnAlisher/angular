import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Users } from './users/users';
import { canLogin, isExist, Login } from './login/login';
import { UserDetail } from './user-detail/user-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'users', component: Users, canActivate: [canLogin] },
  { path: 'users/:id', component: UserDetail, canDeactivate: [isExist] }
];
