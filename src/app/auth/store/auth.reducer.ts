import { Action } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface State {
  user: any;
}

const initialState: State = {
  user: {},
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case AuthActions.LOGIN:
      return {
        ...state,
        user: action.payload
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        user: []
      };
    default:
      return state;
  }
}
