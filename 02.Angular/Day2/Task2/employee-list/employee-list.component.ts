import { Component, Input, OnInit } from '@angular/core';
import { Emps } from '../Emps';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @Input() 
  employeefilter:string = "";
  empArrcopy:Emps[] = [];
  empArr:Emps[] =[
    {empnumber :1, empname:"smith",empjob:"Admin", empsal:1000,empdept:10},
    {empnumber :2, empname:"ram",empjob:"Manager", empsal:2000,empdept:20},
    {empnumber :3, empname:"ramesh",empjob:"hr", empsal:5000,empdept:10}
  ];

  constructor() { }

  ngOnInit(): void {
 
  }


  ngOnChanges(){
    if(this.employeefilter == "sortbyId"){
      this.empArrcopy = this.empArr.sort(function(a,b){return a.empnumber < b.empnumber ? 1 :-1});
      this.empArr = this.empArrcopy;
    }

    

  }

}
