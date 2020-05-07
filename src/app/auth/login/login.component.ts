import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducer';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  submitted = false;
  error = '';

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private store: Store<fromApp.AppState>,
    private router: Router) {}

  ngOnInit(): void {}

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.authService.login(email, password).subscribe((response) => {
          console.log(response);
          this.store.dispatch(new AuthActions.AuthLogin(response));
          this.router.navigate(['/todo-list']);
        }, (error) => {
          console.log(error);
          this.error = error.message;
        }
      );

    }
  }
}
