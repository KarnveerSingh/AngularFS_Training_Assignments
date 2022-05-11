import { TestBed } from '@angular/core/testing';

import { DeptService } from './dept.service';

describe('DeptService', () => {
  let service: DeptService;

  let objForAdd ={deptno : 40, dname : "Hr",  loc :  "Indore"} ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  // a.  Test default items
  it('Test default items', () => {

   expect(service.deptsArray.length).toBe(3);
  });

  // b.  Test addDept
  it('Test addDept', () => {

    service.addDept(objForAdd)

    expect(service.deptsArray.length).toBe(4);
   });
 

  // c.   Test Remove Dept -- for valid number
  it('Test Remove Dept -- for valid number', () => {

    service.removeDept(1)

    expect(service.deptsArray.length).toBe(2);
   });

  // d.   Test Remove Dept -- for invalid     number
  it('Test Remove Dept -- for invalid number', () => {

   let result  = service.removeDept(34)

    expect(result).toEqual(service.deptsArray.length);
   });

});
