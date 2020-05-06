import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as TodoActions from '../store/toto-list.action';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  submitted = false;

  todoForm = this.fb.group({
    title: ['', [Validators.required]],
    desc: ['', [Validators.required]],
  });

  constructor(private store: Store<{todoList: {todos: any[]}}>, private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    // Initialization Code
  }

  get f() {
    return this.todoForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.todoForm.valid) {
      const data = this.todoForm.value;
      const newId = Math.random();
      this.store.dispatch(
        new TodoActions.AddTodo({ id: newId, title: data.title, desc: data.desc })
      );
      this.router.navigate(['/todo-list']);
    }
  }
}
