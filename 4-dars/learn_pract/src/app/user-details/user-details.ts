import { Component } from '@angular/core';
import { ActivatedRoute, CanActivateFn, CanDeactivate, CanDeactivateFn } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('UserDetails component initialized');

    this.route.paramMap.subscribe(params => {
      const userId = params.get('id');
      console.log('User ID from route parameter:', userId);
    });
  }
}

export const authGuard: CanActivateFn = () => {
  return true;
};

export const unSavedChangesGuard: CanDeactivateFn<UserDetails> = (component: UserDetails) => {
  const confirmLeave = window.confirm('You have unsaved changes. Do you really want to leave?');
  return confirmLeave;
}
