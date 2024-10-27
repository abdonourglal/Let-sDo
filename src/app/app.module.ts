import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { EmoloyeeListComponent } from './emoloyee-list/emoloyee-list.component';
import { HeaderComponent } from './header/header.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { FormsModule } from '@angular/forms';
import { CreateTaskComponent } from './to-do-list/create-task/create-task.component';
import { TaskDetailsComponent } from './to-do-list/task-details/task-details.component';
import { TasksListComponent } from './to-do-list/tasks-list/tasks-list.component';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmoloyeeListComponent,
    HeaderComponent,
    ToDoListComponent,
    CreateTaskComponent,
    TaskDetailsComponent,
    TasksListComponent,
    HomeComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
