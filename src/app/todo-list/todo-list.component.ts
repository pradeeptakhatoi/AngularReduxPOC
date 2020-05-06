import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as TodoActions from '../store/toto-list.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: any[];

  constructor(private store: Store<{todoList: {todos: any[]}}>) { }

  ngOnInit(): void {
    this.store.select('todoList').subscribe(data => {
      this.todos = data.todos;
    });
  }

  removeTodo(todo) {
    this.store.dispatch(new TodoActions.RemoveTodo(todo));
  }

}
