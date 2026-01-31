import { Component } from '@angular/core';
import { TodoModel, TodoService } from './todo-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
remove(_t14: TodoModel) {
throw new Error('Method not implemented.');
}
openEditForm(_t14: TodoModel) {
throw new Error('Method not implemented.');
}
  todos: TodoModel[] = [];
  loading: boolean = false;
  error: string = '';

  constructor(private todoService: TodoService){}

   ngOnInit() {
    this.loadTodos();
  }
  

  openAddForm() {
    throw new Error('Method not implemented.');
  }

  loadTodos()
  {
    this.loading = true;

    this.todoService.getTodos().subscribe(
      {
        next: (data) => {
          this.todos = data;
          this.loading = false;
      },
        error: (err) => {
          this.error = 'Ma\'lumotlarni yuklashda xatolik!';
          this.loading = false;
          console.error('Error:', err);
      }
      }
    )
  }

}
