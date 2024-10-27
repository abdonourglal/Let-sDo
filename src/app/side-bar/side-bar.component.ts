import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces/tasks';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  constructor(private taskServeic: TaskService) {}
  ngOnInit(): void {
    this.taskServeic.taskUpdated$.subscribe(() => {
      console.log(this.receivedLists?.importantTasks.length);
    });
  }
  receivedLists:
    | {
        tasks: Task[];
        todayTasks: Task[];
        TommorowTasks: Task[];
        NewxtWeekTasks: Task[];
        PlannedTasks: Task[];
        importantTasks: Task[];
      }
    | undefined;

  handleTasksKind(data: {
    tasks: Task[];
    todayTasks: Task[];
    TommorowTasks: Task[];
    NewxtWeekTasks: Task[];
    PlannedTasks: Task[];
    importantTasks: Task[];
  }) {
    this.receivedLists = data;
    console.log('Tasks received:', this.receivedLists);
  }
}
