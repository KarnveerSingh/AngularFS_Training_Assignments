import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee-filter',
  templateUrl: './employee-filter.component.html',
  styleUrls: ['./employee-filter.component.css']
})
export class EmployeeFilterComponent implements OnInit {

  @Output()
  onClickSortFilter:EventEmitter<string> = new EventEmitter();




  sortEmpNo:string = '';
  constructor() { }


  ngOnInit(): void {

  }

  sort_EmpNo(evntName:string){
    this.onClickSortFilter.emit(evntName);
  }


}
