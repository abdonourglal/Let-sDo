import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces/tasks';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  // newTask: string = '';
  // tasks: Task[] = [];
  ngOnInit(): void {}
}
