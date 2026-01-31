import { Component } from '@angular/core';
import { AuthService } from '../auth-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = ''; 

  constructor(private authService: AuthService) {}

  onSubmit(){
    if(this.authService.users.find(user => user.email == this.email) != null)
    {
      alert('user is exist with' + this.email + 'email');
      return;
    }
    this.authService.register(this.firstname, this.lastname, this.email, this.password);

    alert('Successfully added');
    this.lastname='';
    this.firstname = '';
    this.email = '';
    this.password = '';
  }

}
