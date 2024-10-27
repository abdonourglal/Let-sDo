import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/interfaces/tasks';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent {
  @Input() tasks: Task[] = [];

  @Output() emitData = new EventEmitter<Task>();
  complet = false;
  constructor(private taskServeice: TaskService) {}
  // onTaskCreated(newtask: Task) {
  //   this.tasks.push(newtask);

  // }

  emitDataToMakChange(task: Task) {
    this.emitData.emit(task);
  }
  MakeItImportant(task: Task) {
    task.important = !task.important;
    this.emitData.emit(task);
    console.log(task);
    this.taskServeice.notifyTasksUpdated();
  }
  change() {
    this.complet = !this.complet;
  }
}
