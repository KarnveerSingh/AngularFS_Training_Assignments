import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Emps } from '../Emps';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  empnumber:number=0;
  empname:string = "";
  empjob:string = "";
  empsal:number =0;
  empdept:number = 0;


  empArray:any[] = []
  constructor(private  _dataService:DataService) { }

  ngOnInit(): void {
    this.empArray = this._dataService.getEmpData();
    
  }



  //button events

  Add_click(){
   let empObj:any = new Object();
   empObj.empno = this.empnumber,
   empObj.ename = this.empname,
   empObj.job= this.empjob,
   empObj.sal=this.empsal,
   empObj.deptno = this.empdept
  this._dataService.AddEmp(empObj);
  
  }


  delete_click(empno:number){
    if(confirm("Are you sure want to delete this record?") === true)
    this._dataService.RemoveEmp(empno);

  }
}
