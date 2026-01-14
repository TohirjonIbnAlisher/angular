import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Student {
  id: number;
  name: string;
  score: number;
  subject: string;
  grade: string;
}
@Component({
  selector: 'app-student-form',
  imports: [FormsModule],
  templateUrl: './student-form.html',
  styleUrl: './student-form.css',
})
export class StudentForm {
  @Input() studentName? = '';
  @Input() studentScore: number | null = null;
  @Input() studentSubject? = '';
  @Input() students: Student[] = [];

  @Output() onStudentOperation = new EventEmitter<Student[]>();


  onStudentAdd() {
    console.log(this.studentName, this.studentScore, this.studentSubject);
    if(!this.studentScore) {
      alert('Score is required');
      return;
    }

    if(this.studentScore !== undefined && (this.studentScore > 100 || this.studentScore < 0)) {
      alert('Score must be between 0 and 100');
      return;
    }
    if(!this.studentName || !this.studentSubject) {
      alert('Name and Subject are required');
      return;
    }

    const newStudent: Student = {
      id: this.students.length > 0 ? this.students[this.students.length - 1].id + 1 : 1,
      name: this.studentName,
      score: this.studentScore,
      subject: this.studentSubject,
      grade: this.studentScore >= 90 ? 'A' : this.studentScore >= 80 ? 'B' : this.studentScore >= 70 ? 'C' : this.studentScore >= 60 ? 'D' : 'F',
    };
    this.students.push(newStudent);

    this.studentName = '';
    this.studentScore = null;
    this.studentSubject = '';

    this.onStudentOperation.emit(this.students);
  }


}
