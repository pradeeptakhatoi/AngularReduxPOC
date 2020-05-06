import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { todoListReducer } from './store/toto-list.reducer';

import { TodoListComponent } from './todo-list/todo-list.component';
import { ProjectsComponent } from './projects/projects.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'add-todo', component: AddTodoComponent },
  { path: 'edit-todo/:id', component: EditTodoComponent },
  { path: 'todo-list', component: TodoListComponent },
  { path: 'project-list', component: ProjectsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    ProjectsComponent,
    HomeComponent,
    AddTodoComponent,
    EditTodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      todoList: todoListReducer,
    }),
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
