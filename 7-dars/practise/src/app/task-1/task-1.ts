import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, debounce, debounceTime, filter, tap, of, map } from 'rxjs';

@Component({
  selector: 'app-task-1',
  imports: [ReactiveFormsModule, AsyncPipe, CommonModule],
  templateUrl: './task-1.html',
  styleUrl: './task-1.css',
})

export class Task1 {

  searchControl = new FormControl('');
  task2$ = of(1,2,3,4,5,6,7,8,9,10);

  constructor()
  {
    this.searchControl.valueChanges.pipe(
    debounceTime(500),
    filter(text => !!text && text.length > 2),
    tap((val) => console.log(val))
  )
  .subscribe();

  this.task2$.pipe(
    filter(num => num % 2 === 1),
    map(num => num * 2),
    tap(num => console.log(num))
  )
  .subscribe();

  
  }
}
