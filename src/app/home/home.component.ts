import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Task } from '../interfaces/tasks';
import { TasksListComponent } from '../to-do-list/tasks-list/tasks-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tasks: Task[] = [];
  todayTasks: Task[] = [];
  TommorowTask: Task[] = [];
  NewxtWeekTasks: Task[] = [];
  PlannedTasks: Task[] = [];
  importantTasks: Task[] = [];

  todayDate: Date = new Date();
  tomorrowDate: Date = new Date();
  nextWeekDate: Date = new Date();
  @Output() ListsEmmitter = new EventEmitter<{
    tasks: Task[];
    todayTasks: Task[];
    TommorowTasks: Task[];
    NewxtWeekTasks: Task[];
    PlannedTasks: Task[];
    importantTasks: Task[];
  }>();
  @ViewChild(TasksListComponent) tasksListComponent!: TasksListComponent;
  constructor() {
    // Calculate tomorrow's date
    this.tomorrowDate.setDate(this.todayDate.getDate() + 1);

    // Calculate next week's date
    this.nextWeekDate.setDate(this.todayDate.getDate() + 7);
  }
  ngOnInit(): void {}
  onTaskCreated(newTask: Task) {
    this.tasks.push(newTask); // Add the new task to the tasks array

    if (newTask.due.getDate() == this.todayDate.getDate()) {
      this.todayTasks.push(newTask);
    } else if (newTask.due.getDate() == this.tomorrowDate.getDate()) {
      this.TommorowTask.push(newTask);
    } else if (newTask.due.getDate() == this.nextWeekDate.getDate()) {
      this.NewxtWeekTasks.push(newTask);
    }
    if (newTask.important) {
      this.importantTasks.push(newTask);
    }

    if (newTask.due.getDate() != this.todayDate.getDate()) {
      this.PlannedTasks.push(newTask);
    }

    console.log('++++++++++++++++++++++++++++++');
    console.log(newTask.due.getDate() == this.todayDate.getDate());
    this.SendListsToParent();
  }
  SendListsToParent() {
    this.ListsEmmitter.emit({
      tasks: this.tasks,
      todayTasks: this.todayTasks,
      TommorowTasks: this.TommorowTask,
      NewxtWeekTasks: this.NewxtWeekTasks,
      PlannedTasks: this.PlannedTasks,
      importantTasks: this.importantTasks,
    });
  }
  updateTaskLists(newTask: Task) {
    if (newTask.due.getDate() === this.todayDate.getDate()) {
      this.todayTasks.push(newTask);
    } else if (newTask.due.getDate() === this.tomorrowDate.getDate()) {
      this.TommorowTask.push(newTask);
    } else if (newTask.due.getDate() === this.nextWeekDate.getDate()) {
      this.NewxtWeekTasks.push(newTask);
    }

    if (newTask.important) {
      this.importantTasks.push(newTask);
    }

    if (newTask.due.getDate() !== this.todayDate.getDate()) {
      this.PlannedTasks.push(newTask);
    }
  }
  onImportantStatusChanged() {
    this.importantTasks.length;
  }
}
