import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}
