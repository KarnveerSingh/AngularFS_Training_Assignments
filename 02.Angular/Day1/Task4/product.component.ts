import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  productname:string = '';
  unitprice:number = 0;
  quantity:number = 1;
  totalAmount:number = 0;
  mystyle:string = '';

   Button_Click(){
    this.totalAmount = this.unitprice*this.quantity;

    if(this.totalAmount>10000){
      this.mystyle = "color:green;"
    }else{
      this.mystyle = "color:blue;"

    }
  }

}
