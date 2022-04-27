import { Component, OnInit } from '@angular/core';
import { Products } from '../Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  productArr: Products[] = [
    { pid: 1, pname: "product1", price: 100, category: "category 1", qty: 4 },
    { pid: 2, pname: "product2", price: 200, category: "category 3", qty: 2 },
    { pid: 3, pname: "product3", price: 300, category: "category 1", qty: 4 },
    { pid: 4, pname: "product4", price: 400, category: "category 7", qty: 6 },
    { pid: 5, pname: "product5", price: 500, category: "category 8", qty: 8 },
  ];
}
