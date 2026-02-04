import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  name: string = "";
  email: string = "";
  password: string = "";

  onSubmit() {
    console.log('Ma\'lumotlar:', {
      name: this.name,
      email: this.email,
      password: this.password
    });

    alert('Ro\'yxatdan o\'tdingiz!');
  }

}
