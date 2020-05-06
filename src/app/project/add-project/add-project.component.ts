import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import * as ProjectActions from '../store/project-list.actions';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  submitted = false;

  projectForm = this.fb.group({
    title: ['', [Validators.required]],
    desc: ['', [Validators.required]],
    price: ['', [Validators.required]],
  });

  constructor(private store: Store<fromApp.AppState>, private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
  }

  get f() {
    return this.projectForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.projectForm.valid) {
      const data = this.projectForm.value;
      const newId = Math.random();
      this.store.dispatch(
        new ProjectActions.AddProject({ id: newId, title: data.title, desc: data.desc, price: data.price })
      );
      this.router.navigate(['/project-list']);
    }
  }

}
