import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  contactForm!: FormGroup;

  ngOnInit() {
    this.contactForm = new FormGroup(
      {
        name: new FormControl(
          'Abdulloh',
          [Validators.required, Validators.minLength(3)]
        ),
        email: new FormControl(
          'abdulloh_buxoriy@gmail.com',
          [Validators.required, Validators.email]
        ),
        message: new FormControl(
          'Assalamu alaykum',
          [Validators.required, Validators.minLength(10)]
        )
      }
    );
  }

  onSubmit(){
    if(this.contactForm.valid){
      console.log(this.contactForm.value);
      alert('Xabar yuborildi!');
      this.contactForm.reset();

      // this.contactForm.setValue(
      //   {
      //     name:'Sa\'d',
      //     email:'sa\'d@gmail.com',
      //     message:'Kayfa xaluk Sa\'d'
      //   }
      // )

      this.contactForm.patchValue(
        {name: 'Abdurrohman'}
      )
    }
  }

  get name(){
    return this.contactForm.get('name');
  }

  get email(){
    return this.contactForm.get('email');
  }

  get message()
  {
    return this.contactForm.get('message');
  }
}
