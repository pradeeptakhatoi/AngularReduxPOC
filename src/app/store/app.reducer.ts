import { ActionReducerMap } from '@ngrx/store';

import * as fromTodoList from '../todo/store/toto-list.reducer';
import * as fromProjectList from '../project/store/project-list.reducer';
import * as fromAuthReducer from '../auth/store/auth.reducer';


export interface AppState {
  todoList: fromTodoList.State;
  projectList: fromProjectList.State;
  user: fromAuthReducer.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  todoList: fromTodoList.todoListReducer,
  projectList: fromProjectList.projectListReducer,
  user: fromAuthReducer.authReducer,
};
