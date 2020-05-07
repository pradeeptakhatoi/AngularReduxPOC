import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromApp from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Welcome to Angular Redux(ngrx)';
  user: any;

  constructor(private store: Store<fromApp.AppState>, private router: Router) { }

  ngOnInit() {
    this.store.select('user').subscribe(data => {
      this.user = data.user;
    });
  }

  logout() {
    this.store.dispatch(new AuthActions.AuthLogout({}));
    this.router.navigate(['/login']);
  }

}
