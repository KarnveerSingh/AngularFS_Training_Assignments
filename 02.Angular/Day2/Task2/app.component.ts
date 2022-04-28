import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';
  prodCat:string= "category1";


  filters:string = 'sortenvt';

  Sort(sortfilter:string){

    this.filters = sortfilter;
  }
}
