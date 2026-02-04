import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username: string = "";
  password: string = "";
  email: any;

  onSubmit() {
    console.log(this.username)
    console.log(this.password)

    if(this.username === 'admin' && this.password === '123'){
      alert('Muvaffaqqiyatli kirdingiz!')
    } else{
      alert('Username yoki parol xato!')
    }
  }
}
