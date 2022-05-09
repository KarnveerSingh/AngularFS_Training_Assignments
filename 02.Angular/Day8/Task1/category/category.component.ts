import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productArr: any[] = [
    { pid: 1, pname: "product1", price: 100, category: "category 1", qty: 4 },
    { pid: 2, pname: "product2", price: 200, category: "category 3", qty: 2 },
    { pid: 3, pname: "product3", price: 300, category: "category 1", qty: 4 },
    { pid: 4, pname: "product4", price: 400, category: "category 7", qty: 6 }
  ];

}
