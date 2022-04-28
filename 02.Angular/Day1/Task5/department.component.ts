import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Dept } from '../dept';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  deptno:number = 0;
  dname:string = "";
  loc:string = "";

  deptsArray:Dept[] = [
    {deptno : 10, dname : "Accounts",  loc :  "Hyd"} ,
    {deptno : 20, dname : "Sales",  loc :  "Pune"},
    {deptno : 30, dname : "Marketing",  loc :  "Hyd"}
  ];

  constructor() { }

  ngOnInit(): void {
  }


  addDept_click()
  {
      let deptObj:Dept = new Dept();
      deptObj.deptno = this.deptno;
      deptObj.dname = this.dname;
      deptObj.loc = this.loc;

      this.deptsArray.push(deptObj);
      //method for clearing filed
      this.clearForm();
  }


  delete_click(dno:number)
  {
    if(confirm("Are you sure want to delete this record?") === true){
      let index = this.deptsArray.findIndex(item => item.deptno == dno);
      this.deptsArray.splice(index, 1);
    }
    
  }

  select_click(dno:number)
  {
    let deptObj:any = this.deptsArray.find(item => item.deptno == dno);
    this.deptno = deptObj.deptno;
    this.dname = deptObj.dname;
    this.loc = deptObj.loc;
  }

  update_click()
  {
    let deptObj:any = this.deptsArray.find(item => item.deptno == this.deptno);
    deptObj.deptno = this.deptno 
    deptObj.dname = this.dname ;
    deptObj.loc = this.loc ;
    this.clearForm();
  }

  clearForm(){
    this.deptno = 0;
    this.dname = "";
    this.loc = "";
  }

}
