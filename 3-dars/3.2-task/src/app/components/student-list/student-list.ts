import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form } from '@angular/forms/signals';
import { StudentCard } from "./components/student-card/student-card";
import { StudentForm } from '../student-form/student-form';

export interface Student {
  id: number;
  name: string;
  score: number;
  subject: string;
  grade: string;
}
@Component({
  selector: 'app-student-list',
  imports: [FormsModule, StudentCard, StudentForm],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {

  @ViewChild(StudentForm) studentForm!: StudentForm;

  studentName? = '';
  studentScore: number | null = null;
  studentSubject? = '';

  students = new Array<Student>(
    { id: 1, name: 'Alice', score: 95, subject: 'Math', grade: 'A' },
    { id: 2, name: 'Bob', score: 85, subject: 'Science', grade: 'B' },
    { id: 3, name: 'Charlie', score: 72, subject: 'History', grade: 'C' },
    { id: 4, name: 'David', score: 60, subject: 'Math', grade: 'D' },
    { id: 5, name: 'Eve', score: 45, subject: 'Science', grade: 'F' }
  );

  filterGrade = '';
  filterSubject = '';


   filterStudentsBySubject() {
    console.log('filter text' + this.filterSubject);
      console.log(this.students);
    if(this.filterSubject != '') {

      this.students = this.students.filter(s => s.subject == this.filterSubject);
    }
    if(this.filterGrade != '') {
      this.students = this.students.filter(s => s.grade == this.filterGrade);
    }
  }

  onStudentAdd() {
    this.studentForm.onStudentAdd();
  }

  refreshStudents(updatedStudents: Student[]) {
    console.log('Refreshing students in parent component');
    this.students = updatedStudents;
  }

  getStyle(score: number) {
    if (score >= 90) {
      return 'green';
    } else if (score >= 60) {
      return 'orange';
    } else {
      return 'red';
    }
  }
}
