import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

export interface Student {
  id: number;
  name: string;
  role: Role;
}

export enum Role {
  All = 'Foydalanuvchi',
  Admin = 'Admin',
  User = 'User',
  Guest = 'Guest'
}

@Component({
  selector: 'app-users',
  imports: [FormsModule, RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {

  onStudentFilter() {
    console.log(this.currentRole, typeof(this.currentRole));
    console.log(Role.All);
    console.log(this.currentRole.toString() == Role.All.toString());
    if(this.currentRole == 'Foydalanuvchi')
    {
      this.viewUsers = this.students;
      console.log('jgvsdvvjvvsdhgc');
    }
    else
    {
      this.viewUsers = this.students.filter(user => user.role === this.currentRole);
      console.log('else log');
    }

    if(this.filterName !== '')
      this.viewUsers = this.students.filter(user => user.name.toLowerCase().includes(this.filterName.toLowerCase()));

    this.router.navigate(['users'], {
      queryParams: {role: this.currentRole}
    }
    )
  }

  constructor(private router: Router) {}

  onClickView(id: number) {
    this.router.navigate(['/users', id]);
  }
   name = '';
   role: Role | null = null;
   currentRole: Role = Role.All;
   filterName: string = '';

  students = new Array<Student>();
  viewUsers = new Array<Student>();

  onStudentAdd() {
    console.log('Student Added ✅');

    const newStudent: Student = {
      id: this.students.length + 1,
      name: this.name,
      role: this.role as Role,
    };

    this.students.push(newStudent);
    this.viewUsers = this.students;
    this.name = '';
    this.role = null;
  }

  onStudentDelete(sName: string) {
    console.log('Student Deleted ❌');
    this.students = this.students.filter(s => s.name !== sName);

    this.viewUsers = this.students;
  }

}
