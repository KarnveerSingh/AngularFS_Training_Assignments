import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeptService {


  constructor() { }


  deptsArray:any[] = [
    {deptno : 10, dname : "Accounts",  loc :  "Hyd"} ,
    {deptno : 20, dname : "Sales",  loc :  "Pune"},
    {deptno : 30, dname : "Marketing",  loc :  "Hyd"}
  ];



  public addDept(deptObj:any){
    this.deptsArray.push(deptObj);
   
  }

  public removeDept(dno:number){

    let index = this.deptsArray.findIndex(item => item.deptno ===dno);
    this.deptsArray.splice(index, 1);
    return this.deptsArray.length;
  }
  
}
