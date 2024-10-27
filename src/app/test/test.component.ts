import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  text: any = 'this is InterProlation Binding';
  textDanger = 'text-danger';
  messge = '';
  haserror = false;
  width = '150vh';
  clicked = false;
  isSpicial = true;
  car = 'LOGA';
  @Input() childData: any = 'U';
  @Output() msgFromChild = new EventEmitter();
  setOFClass = {
    'text-danger': !this.haserror,
  };
  PrintFromModel() {
    if (!this.clicked) {
      this.clicked = true;
      this.messge = 'Hello Event binding clicked';
    } else {
      this.clicked = false;
      this.messge = '';
    }
  }
  sendDataToParnet() {
    this.msgFromChild.emit('hello Im Child');
  }
  ngOnInit(): void {}
}
