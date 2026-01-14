import { Injectable } from '@angular/core';

export interface Student {
  id: number;
  name: string;
  score: number;
  subject: string;
  grade: string;
}
@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students = new Array<Student>(
    { id: 1, name: 'Alice', score: 95, subject: 'Math', grade: 'A' },
    { id: 2, name: 'Bob', score: 85, subject: 'Science', grade: 'B' },
    { id: 3, name: 'Charlie', score: 72, subject: 'History', grade: 'C' },
    { id: 4, name: 'David', score: 60, subject: 'Math', grade: 'D' },
    { id: 5, name: 'Eve', score: 45, subject: 'Science', grade: 'F' }
  );

  addStudent(name?: string, score?: number, subject?: string) {
    if(!score) {
      alert('Score is required');
      return;
    }

    if(score !== undefined && (score > 100 || score < 0)) {
      alert('Score must be between 0 and 100');
      return;
    }
    if(!name || !subject) {
      alert('Name and Subject are required');
      return;
    }

    const newStudent: Student = {
      id: this.students.length > 0 ? this.students[this.students.length - 1].id + 1 : 1,
      name: name,
      score: score,
      subject: subject,
      grade: score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F',
    };
    this.students.push(newStudent);
  }
  deleteStudent(studentId: number) {
    const index = this.students.findIndex((s) => s.id === studentId);
    if (index === -1) {
      alert('Student not found');
      return;
    }
    this.students = this.students.filter((s) => s.id !== studentId);
  }
  getStudents() {
    return this.students;
  }
  updateStudent(id: number, name?: string, score?: number, subject?: string) {
    if(!name || !subject || score === undefined) {
      alert('Name and Subject are required');
      return;
    }
    let storageStudent = this.students.filter((s) => s.id === id)[0];

    if (storageStudent === undefined) {
      alert('Student not found');
      return;
    }

    console.log(storageStudent);
    storageStudent.name = name;
        storageStudent.score = score;
        storageStudent.subject = subject;
        storageStudent.grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F';
  }
  getAverageScore() {
    if (this.students.length === 0) return 0;
    const totalScore = this.students.reduce((acc, student) => acc + student.score, 0);
    return totalScore / this.students.length;
  }
  getTopScoringStudent() {
    if (this.students.length === 0) return null;
    return this.students.reduce((topStudent, currentStudent) =>
      currentStudent.score > topStudent.score ? currentStudent : topStudent
    );
  }
}
