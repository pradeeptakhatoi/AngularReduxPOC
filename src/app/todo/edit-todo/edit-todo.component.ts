import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import * as TodoActions from '../store/toto-list.action';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {
  submitted = false;
  id: number;
  todo: any;

  todoForm = this.fb.group({
    title: ['', [Validators.required]],
    desc: ['', [Validators.required]],
  });

  constructor(
    private store: Store<fromApp.AppState>,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {
      this.route.params.subscribe(params => {
        this.id = +params.id;
      });
    }

  ngOnInit(): void {
    this.store.select('todoList').subscribe(data => {
      this.todo = data.todos.find(t => t.id === this.id);
    });
    this.todoForm.patchValue(this.todo);
  }

  get f() {
    return this.todoForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.todoForm.valid) {
      const data = {...this.todoForm.value, id: this.id};
      this.store.dispatch(new TodoActions.EditTodo(data));
      this.router.navigate(['/todo-list']);
    }
  }

}
