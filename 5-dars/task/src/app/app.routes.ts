import { Routes } from '@angular/router';
import { Register } from './register/register';
import { RegisterFormBuilder } from './register-form-builder/register-form-builder';

export const routes: Routes = [
    {path: 'register', component: Register},
    {path: 'register-form-builder', component: RegisterFormBuilder}
];
