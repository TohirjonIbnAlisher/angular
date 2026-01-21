import { Component } from '@angular/core';
import { CanActivateFn, CanDeactivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserDetail } from '../user-detail/user-detail';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

}


export const canLogin: CanActivateFn = () => {
  const router = inject(Router);
  const isLoggedIn = !!localStorage.getItem('token');
  console.log(isLoggedIn);
  if(!isLoggedIn)
  {
    router.navigate(['/login'])
  }
  return isLoggedIn;
}

export const isExist: CanDeactivateFn<UserDetail> = (component) => {

  return true;
}
