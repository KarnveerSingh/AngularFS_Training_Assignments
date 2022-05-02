import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit {


  displayMode:string = 'list';


  productArr: any[] = [
    { pid: 1, pname: "product1", price: 100, category: "category1", qty: 4,picture:"assets/delete.png" },
    { pid: 2, pname: "product2", price: 200, category: "category3", qty: 2,picture:"assets/update.png" },
    { pid: 3, pname: "product3", price: 300, category: "category1", qty: 4,picture:"assets/select.png" },
    { pid: 4, pname: "product4", price: 400, category: "category7", qty: 6,picture:"assets/delete.png" },
    { pid: 5, pname: "product5", price: 500, category: "category8", qty: 8,picture:"assets/update.png" },
  ];
  constructor() { }

  ngOnInit(): void {
  }


  Image_Click(param:string){
    // alert(param);
    this.displayMode = param;
  }
}
