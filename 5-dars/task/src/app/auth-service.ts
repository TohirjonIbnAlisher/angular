import { Injectable } from '@angular/core';

export interface User
{
  id: number;
  firstname: string;
  lastname: string;
  email:string;
  password:string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: User[] = [];

  register(
    name: string,
    surname: string,
    email: string,
    password: string)
  {
    let indexs = this.users.map(user => user.id);
    this.users.push(
      {
        id: Math.max(...indexs) + 1,
        firstname: name,
        lastname : surname,
        email: email,
        password: password
      }
    );
  }
}
