import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {EmployeeModel} from '../EmployeeModel';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) {} 
  
  employeeModel: EmployeeModel;
  status: string;
  ngOnInit() {

    this.viewEmployee();
  }

  viewEmployee():void {
    this.employeeService.getEmpl().subscribe(data=>this.status=data);
    console.log('Delete success');
  }

}
