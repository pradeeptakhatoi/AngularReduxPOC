import { Action } from '@ngrx/store';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export class AuthLogin implements Action {
  type = LOGIN;
  constructor(public payload: any) {}
}

export class AuthLogout implements Action {
  type = LOGOUT;
  constructor(public payload: any) {}
}

export type AuthActions = AuthLogin | AuthLogout;
