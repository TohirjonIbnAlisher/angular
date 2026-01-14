import { Component, Input, input, Output, EventEmitter } from '@angular/core';
export interface Student {
  id: number;
  name: string;
  score: number;
  subject: string;
  grade: string;
}
@Component({
  selector: 'app-student-card',
  imports: [],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css',
})
export class StudentCard {

  @Input() students = new Array<Student>();

  @Input() name? = '';
  @Input() score: number | null = null
  @Input() subject? = '';

  @Output() onStudentOperation = new EventEmitter<Student[]>();

  onStudentUpdate(id: number) {
    console.log(this.name, this.score, this.subject + 'dsgdg');
    if(!this.name || !this.subject || this.score == undefined) {
      alert('Name and Subject are required');
      return;
    }
    let storageStudent = this.students.filter((s) => s.id === id)[0];

    if (storageStudent === undefined) {
      alert('Student not found');
      return;
    }

    console.log(storageStudent);
    storageStudent.name = this.name;
        storageStudent.score = this.score;
        storageStudent.subject = this.subject;
        storageStudent.grade = this.score >= 90 ? 'A' : this.score >= 80 ? 'B' : this.score >= 70 ? 'C' : this.score >= 60 ? 'D' : 'F';

    this.onStudentOperation.emit(this.students);
  }
  onStudentDelete(studentId: number) {
    const index = this.students.findIndex((s) => s.id === studentId);
    if (index === -1) {
      alert('Student not found');
      return;
    }
    this.students = this.students.filter((s) => s.id !== studentId);

    this.onStudentOperation.emit(this.students);
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
