import { Action } from '@ngrx/store';

export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export class AddTodo implements Action {
  type = ADD_TODO;
  constructor(public payload: any) {}
}

export class EditTodo implements Action {
  type = EDIT_TODO;
  constructor(public payload: any) {}
}

export class RemoveTodo implements Action {
  type = REMOVE_TODO;
  constructor(public payload: any) {}
}

export type TodoActions = AddTodo | EditTodo | RemoveTodo;
