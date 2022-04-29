import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtersalary'
})
export class FiltersalaryPipe implements PipeTransform {

  transform(inputData:any[],  value1:string, value2:string): any[]
  {
    console.log("hi");
    return inputData.filter(item => item["empsal"] >= value1 && item['empsal'] <= value2);
  }

}
