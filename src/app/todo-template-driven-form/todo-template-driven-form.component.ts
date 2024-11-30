import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-template-driven-form',
  templateUrl: './todo-template-driven-form.component.html',
  styleUrls: ['./todo-template-driven-form.component.css'],
})
export class TodoTemplateDrivenFormComponent {
  todo = {
    title: '',
    description: '',
  };

  constructor(private todoService: TodoService) {}

  addTodo(): void {
    this.todoService.addTodo(this.todo).subscribe(() => {
      console.log('Todo added successfully');
      this.todo = { title: '', description: '' }; // Reset form
    });
  }
}
