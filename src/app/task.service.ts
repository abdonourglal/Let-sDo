import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}
  private tasksUpdateed = new BehaviorSubject<boolean>(false);

  taskUpdated$ = this.tasksUpdateed.asObservable();

  notifyTasksUpdated() {
    this.tasksUpdateed.next(true);
  }
}
