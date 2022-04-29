import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {




  EmpArray:any[]=[

    {EmpName:"Scott",EmpGrade:1},

    {EmpName:"Smith",EmpGrade:2},

    {EmpName:"Stephan",EmpGrade:4},

    {EmpName:"Niasa",EmpGrade:3},

    {EmpName:"kelvin",EmpGrade:1},

    {EmpName:"Newton",EmpGrade:4},

 

  ];
}
