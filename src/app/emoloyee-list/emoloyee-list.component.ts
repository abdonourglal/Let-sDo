import { Component, OnInit } from '@angular/core';
import { EmployeeServicesService } from '../Services/employee-services.service';
import { Emoployee } from '../interfaces/emoployee';

@Component({
  selector: 'app-emoloyee-list',
  templateUrl: './emoloyee-list.component.html',
  styleUrls: ['./emoloyee-list.component.css'],
})
export class EmoloyeeListComponent implements OnInit {
  constructor(private employesServices: EmployeeServicesService) {}
  employeeList: Emoployee[] = [];
  errmsg: any;
  ngOnInit(): void {
    this.employesServices.getAllEmployee().subscribe(
      // (data) => {
      //   this.employeeList = data;
      // },

      // (servicesErr) => {
      //   this.errmsg = servicesErr;
      // }
      {
        next: (vlaue) => (this.employeeList = vlaue),
        error: (err) => console.log('errrr ' + err),
        complete: () => console.log('Com'),
      }
    );
  }
}
