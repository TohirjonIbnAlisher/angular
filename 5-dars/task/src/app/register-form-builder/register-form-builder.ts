import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-register-form-builder',
  imports: [ReactiveFormsModule],
  templateUrl: './register-form-builder.html',
  styleUrl: './register-form-builder.css',
})
export class RegisterFormBuilder implements OnInit{
  registerForm!: FormGroup;

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        firstname: new FormControl(
          '',
          [Validators.required, Validators.minLength(2)]
        ),
        lastname: new FormControl(
          '',
          [Validators.required, Validators.minLength(2)]
        ),
        email: new FormControl(
          '',
          [Validators.required, Validators.email]
        ),
        password: new FormControl(
          '',
          [Validators.required, Validators.minLength(8)]
        )
      }
    );
  }

  onSubmit()
  {
    console.log(this.registerForm.value)
    if(this.registerForm.valid)
    {

      let fname = this.registerForm.get('firstname')?.value;
      let sname = this.registerForm.get('lastname')?.value;
      let vemail = this.registerForm.get('email')?.value;
      let vpassword = this.registerForm.get('password')?.value;

      this.authService.register(
        fname,
        sname,
        vemail,
        vpassword
      );

      alert('Muvaffaqqiyatli ro\'yxatdan o\'tildi')
    }
  }
    get firstname()
    {
      return this.registerForm.get('firstname');
    }

    get surname()
    {
      return this.registerForm.get('lastname');
    }

    get email()
    {
      return this.registerForm.get('email');
    }

    get password()
    {
      return this.registerForm.get('password');
    }
  
}
