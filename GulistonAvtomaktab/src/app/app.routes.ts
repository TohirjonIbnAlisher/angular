import { Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { Login } from './login/login';
import { StudyDashboard } from './study-dashboard/study-dashboard';
import { Subject } from './study-dashboard/subject/subject';
export const routes: Routes = [
  {
    path: '',
    component: Landing
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'study-dashboard',
    component: StudyDashboard
  },
  {
    path: 'subject',
    component: Subject
  }
];
