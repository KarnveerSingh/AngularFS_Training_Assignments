import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {

  public employeeId:number = 4545;
  public empName:string = "Smith";
  public empJob:string = "Manager";
  public empSal:number = 75000;
  public empDepo:number = 10;

}
