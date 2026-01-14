import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Student, StudentService } from './student-service';

@Component({
  selector: 'app-student-list-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-list-component.html',
  styleUrl: './student-list-component.css',
})
export class StudentListComponent {
  studentName? = '';
  studentScore: number | null = null;
  studentSubject? = '';

  filterGrade = '';
  filterSubject = '';

  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }

  onStudentAdd() {
    this.studentService.addStudent(this.studentName, this.studentScore!, this.studentSubject);

    this.studentName = '';
    this.studentScore = null;
    this.studentSubject = '';

    this.students = this.studentService.getStudents();
  }

  onStudentDelete(id : number) {
    this.studentService.deleteStudent(id);
  }

  onStudentUpdate(id : number) {
    this.studentService.updateStudent(id, this.studentName, this.studentScore!, this.studentSubject);

    this.students = this.studentService.getStudents();

    console.log(this.students);

    this.studentName = '';
    this.studentScore = null;
    this.studentSubject = '';
  }

  getStudents() {
    return this.studentService.getStudents();
  }

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
