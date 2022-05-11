import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent implements OnInit {

  productArr: any[] = [
    { pid: 1, pname: "product1", price: 100, category: "category1", qty: 4},
    { pid: 2, pname: "product2", price: 200, category: "category3", qty: 2},
    { pid: 3, pname: "product3", price: 300, category: "category1", qty: 4},
    { pid: 4, pname: "product4", price: 400, category: "category7", qty: 6},
    { pid: 5, pname: "product5", price: 500, category: "category8", qty: 8},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public  onremoveprod(pid: number)
	{
		 var index =  this.productArr.findIndex((x:any) => x.pid == pid);
		 this.productArr.splice(index, 1);
	}
}
