import { Action } from '@ngrx/store';

export const ADD_PROJECT = 'ADD_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';

export class AddProject implements Action {
  type = ADD_PROJECT;
  constructor(public payload: any) {}
}

export class DeleteProject implements Action {
  type = DELETE_PROJECT;
  constructor(public payload: any) {}
}

export type ProjectActions = AddProject | DeleteProject;
