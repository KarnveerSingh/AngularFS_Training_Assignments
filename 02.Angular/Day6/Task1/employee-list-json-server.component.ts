import { Component, OnInit } from '@angular/core';
import { JsonDataService } from '../json-data.service';

@Component({
  selector: 'app-employee-list-json-server',
  templateUrl: './employee-list-json-server.component.html',
  styleUrls: ['./employee-list-json-server.component.css']
})
export class EmployeeListJsonServerComponent implements OnInit {

  id:number=0;
  empname:string = "";
  empjob:string = "";
  empsal:number =0;
  empdept:number = 0;

  resObj:any = {};

  constructor(private dataService:JsonDataService) { }

  ngOnInit(): void {
  }

  getData_click()
  {
			this.dataService.getAllEmployees().subscribe( (resData:any) =>
			{
        console.log(resData);
        this.resObj = resData;
			});
  }

  addData_click() {
    let empobj:any = {};
    empobj.id = 0;
    empobj.empname = this.empname;
    empobj.empjob = this.empjob;
    empobj.empsal = this.empsal;
    empobj.empdept = this.empdept;

    console.log(empobj);

    this.dataService.addEmployee(empobj).subscribe( (resData:any) =>
    {
      alert("New Employee details are added to database");
      this.getData_click();
    });
  }

  updateData_click() {
    let empobj:any = {};
    empobj.id = this.id;
    empobj.empname = this.empname;
    empobj.empjob = this.empjob;
    empobj.empsal = this.empsal;
    empobj.empdept = this.empdept;

    console.log(empobj);

    this.dataService.updateEmployee(empobj).subscribe( (resData:any) =>
    {
       alert("Employee details are update to database");
      this.getData_click();
    });
  }

  deleteData_click(sid:number) {

    this.dataService.deleteEmployee(sid).subscribe( (resData:any) =>
    {
      alert("Employee details are deleted from database");
      this.getData_click();
    });

  }

  selectData_click(sid:number) {

    this.id = sid;
    
    this.dataService.getEmployeeById(sid).subscribe( (resData:any) =>
    {
      this.empname = resData.empname;
      this.empjob = resData.empjob;
      this.empsal = resData.empsal;
      this.empdept = resData.empdept;
    });
  }
  clearFields() {
    this.empname = "";
    this.empjob  = "";
    this.empsal  = 0;
    this.empdept= 0;
  }
}
