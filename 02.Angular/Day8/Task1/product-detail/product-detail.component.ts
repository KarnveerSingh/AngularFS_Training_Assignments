import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private   route: ActivatedRoute) { }
  productArr:any = {};
  productArrcpy: any[] = [
    { cid: 1, pname: "product1", price: 100, category: "category 1", qty: 4 },
    { cid: 2, pname: "product2", price: 200, category: "category 3", qty: 2 },
    { cid: 3, pname: "product3", price: 300, category: "category 1", qty: 4 },
    { cid: 4, pname: "product4", price: 400, category: "category 7", qty: 6 },
    { cid: 4, pname: "product5", price: 400, category: "category 7", qty: 6 },
    { cid: 2, pname: "product6", price: 400, category: "category 7", qty: 6 },
    { cid: 4, pname: "product6", price: 400, category: "category 7", qty: 6 },
    { cid: 1, pname: "product6", price: 400, category: "category 7", qty: 6 },
  ];

  ngOnInit(): void {
    let selecteproduct =this.route.snapshot.params["id"];
    this.productArr = this.productArrcpy.filter(item => item.cid == selecteproduct);

    console.log(this.productArr)
  }
}
