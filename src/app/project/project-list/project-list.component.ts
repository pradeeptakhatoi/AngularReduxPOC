import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as ProjectActions from '../store/project-list.actions';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects: Observable<any>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.projects = this.store.select('projectList');
  }

  removeProject(project: any) {
    this.store.dispatch(new ProjectActions.DeleteProject(project));
  }

}
