import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular16Project';
  ParentData = 'Hello From Parent';
  msgFromChild: any;
  printMssge() {
    alert('messge From child');
  }
}
