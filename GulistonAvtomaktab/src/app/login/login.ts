import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private router: Router) {}

  showPassword = signal(false);
  phoneNumber = signal('+998 ');
  password = signal('');
  focusedField = signal<string | null>(null);

  handlePhoneChange(event: any) {

    const value = event.target.value;

    if (value.startsWith('+998')) {
      this.phoneNumber.set(value);
    } else {
      this.phoneNumber.set('+998 ');
    }

  }

  togglePassword() {
    this.showPassword.update(v => !v);
  }

  handleSubmit() {
    // bu backend yozilgandan keyin o'zgartiriladi

    this.router.navigate(['/study-dashboard']);
    console.log({
      phone: this.phoneNumber(),
      password: this.password()
    });
  }

}