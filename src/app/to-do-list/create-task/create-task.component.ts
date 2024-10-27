import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/interfaces/tasks';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent implements OnInit {
  newTask: string = '';
  newImportant: boolean = false;
  newStartDate: Date | null = null;
  newDeadLine: Date | null = null;
  newDescription: string = '';
  priority!: 'High' | 'Medium' | 'Low';
  private currentId = 1;
  selectedOption: string | null = null;
  selectedDate: Date = new Date();
  todayDate: Date = new Date();
  tomorrowDate: Date = new Date();
  nextWeekDate: Date = new Date();
  @Output() taskCreated = new EventEmitter<Task>();
  tasks: Task[] = [];
  constructor() {
    // Calculate tomorrow's date
    this.tomorrowDate.setDate(this.todayDate.getDate() + 1);

    // Calculate next week's date
    this.nextWeekDate.setDate(this.todayDate.getDate() + 7);
  }

  ngOnInit(): void {}
  addTask() {
    if (this.newTask.trim()) {
      const task: Task = {
        id: this.currentId++,
        name: this.newTask.trim(),
        description: 'this is description',
        completed: false,
        important: this.newImportant,
        due: this.selectedDate,

        priority: this.priority,
      };

      this.taskCreated.emit(task);
      this.resetNewTaskInputs();
      console.log(task);
    }
  }
  resetNewTaskInputs() {
    this.newTask = '';
    this.newImportant = false;
    this.newStartDate = null;
    this.newDeadLine = null;
    this.priority = 'Medium';
    this.newDescription = '';
  }
  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  onDateChange(event: any) {
    const option = event.value;
    const today = new Date();

    if (option === 'today') {
      this.selectedDate = today;
    } else if (option === 'tomorrow') {
      this.selectedDate = this.tomorrowDate;
    } else if (option === 'nextWeek') {
      this.selectedDate = this.nextWeekDate;
    }
  }
}
