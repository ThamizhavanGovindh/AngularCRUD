import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {DeleteEmployeeComponent} from './delete-employee/delete-employee.component';
import {EditEmployeeComponent} from './edit-employee/edit-employee.component';
import {ViewEmployeeComponent} from './view-employee/view-employee.component';
import {RouterModule,Routes} from '@angular/router';

const routes:Routes= [
  {path: 'AddEmployee', component:AddEmployeeComponent},
  {path: 'DeleteEmployee', component:DeleteEmployeeComponent},
  {path: 'EditEmployee', component:EditEmployeeComponent},
  {path: 'ViewEmployee', component:ViewEmployeeComponent}
];


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
