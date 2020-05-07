import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { EditTodoComponent } from './todo/edit-todo/edit-todo.component';

import { ProjectListComponent } from './project/project-list/project-list.component';
import { AddProjectComponent } from './project/add-project/add-project.component';

import * as fromApp from './store/app.reducer';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { FakeBackendInterceptor } from './services/fakebackend.interceptor';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'add-todo', component: AddTodoComponent },
  { path: 'edit-todo/:id', component: EditTodoComponent },
  { path: 'todo-list', component: TodoListComponent },
  { path: 'add-project', component: AddProjectComponent },
  { path: 'project-list', component: ProjectListComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    ProjectListComponent,
    HomeComponent,
    AddTodoComponent,
    EditTodoComponent,
    ProjectListComponent,
    AddProjectComponent,
    AboutusComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(fromApp.appReducer),
    RouterModule.forRoot(routes),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
