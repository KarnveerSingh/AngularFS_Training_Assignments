import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //default test case
  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // default quantity should be 1
  it('should default quantity to be 1', () => {
    const qty: number = component.quantity;
    expect(qty).toBe(1);
  });


  // default quantity should be 1
  it('should result contains empty', () => {
    let messageObj = fixture.nativeElement.querySelector('span');
    expect(messageObj.textContent).toBe('');
  });


  //result method by calling method  getTotalAmount()
  it('should result contains "Total Amount : 110"', () => {
    component.unitprice = 55;
    component.quantity = 2;
    component.getTotalAmount();
    const strOutput:string  = component.totalAmount;
    expect(strOutput).toBe("Total Amount : 110");
  });


  //result method by calling method  getTotalAmount()
  it('should result contains "Total Amount : 0"', () => {
    component.unitprice = component.unitprice;
    component.quantity = component.quantity;
    component.getTotalAmount();
    const strOutput:string  = component.totalAmount;
    expect(strOutput).toBe("Total Amount : 0");
  });

  

});
