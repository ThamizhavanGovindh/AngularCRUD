import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {EmployeeModel} from '../EmployeeModel';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  employeemodel: EmployeeModel[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.ViewEmployee();
  }
  ViewEmployee():void{
    this.employeeService.getEmployee().subscribe(data=>this.employeemodel=data);
    console.log('data retrived');
  }
  deleteEmployee(employee: EmployeeModel):void{
    this.employeeService.deleteEmployee(employee).subscribe(
        data => {this.employeemodel = this.employeemodel.filter(emp =>emp!==employee );
        }
    )
  }
  
}
