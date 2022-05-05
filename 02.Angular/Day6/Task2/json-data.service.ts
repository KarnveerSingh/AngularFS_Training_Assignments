import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {


  baseUrl:string = "http://localhost:3000/employees/"
  constructor(private httpObj:HttpClient) { }


  
  // Read All
  public getAllEmployees(): Observable<any>
  {   
    return this.httpObj.get(this.baseUrl);
  }

  // Read Single
  public getEmployeeById(sid:number):any
  {
    return this.httpObj.get(this.baseUrl + sid);
  }

  // Create
  public addEmployee(stObj:any):any
  {
    return this.httpObj.post(this.baseUrl, stObj);
  }

  // Update
  public updateEmployee(stObj:any):any
  {
    return this.httpObj.put(this.baseUrl + stObj.id, stObj);
    // return this.httpObj.put(this.baseUrl, stObj);
  }


  // Delete
  public deleteEmployee(sid:number):any
  {
    return this.httpObj.delete(this.baseUrl + sid);
  }

  //sort by salary

  public sortBySalary(){
    return this.httpObj.get<any[]>(this.baseUrl).pipe(map(res => {
      return res.sort((a, b) => b.salary - a.salary ? 1 :-1); 
  }))
  }


  //employee name by job title
  public selectByJobName(name:string){
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return res.filter(item => item.empjob == name );
    })
    );
  }


  // Display all employee names and along with designation
  public DisplayAllEmpAndDsignation(){
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return res.map(item => {
          return { 	name: item.empname, designantion : item.empjob} });
    })
    );

  }


    // Display employees who not working in deptno - 10

    public DisplayeNotInTen(){
      return this.httpObj.get<any[]>(this.baseUrl).pipe(
        map(res => {
          return res.filter(item => item.empdept != 10 );
      })
      );
    }
  

    // Display Manager names works in the given department 
    ReturnManageNameByJobTitle(job:number){
      return this.httpObj.get<any[]>(this.baseUrl).pipe(
        map(res => {
          return res.filter(item => item.empjob == "Manager" &&  item.empdept == job ).map(res => {
            return {EMPNAME: res.empname}
          } );
      })
      );
    }
    
}
