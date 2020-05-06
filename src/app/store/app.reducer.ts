import { ActionReducerMap } from '@ngrx/store';

import * as fromTodoList from '../todo/store/toto-list.reducer';
import * as fromProjectList from '../project/store/project-list.reducer';


export interface AppState {
  todoList: fromTodoList.State;
  projectList: fromProjectList.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  todoList: fromTodoList.todoListReducer,
  projectList: fromProjectList.projectListReducer
};
