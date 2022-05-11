import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProdComponent } from './prod.component';

describe('ProdComponent', () => {
  let component: ProdComponent;
  let fixture: ComponentFixture<ProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // Test child component loading
  it('should render child component elements -- prod-detail', () => {
    const childComponent = fixture.debugElement.query(By.css('app-prod-detail'));
    expect(childComponent).toBeTruthy();
  });


  //Test all child components count and verify
  it('should render all child component elements -- prod-detail', () => {
    const childComponents = fixture.debugElement.queryAll(By.css('app-prod-detail'));
    console.log(childComponents.length);
    expect(childComponents.length).toBe(component.productArr.length);
  });


  //  Test child component properties
  it('testing child component data -- prod-detail', () => {
    const childComponent = fixture.debugElement.query(By.css('app-prod-detail'));
    expect(childComponent.properties["item"][0]).toEqual(component.productArr[0]);
  });


  // Test child component events
  it('testing child component events -- removeprod', () => {
    const childComponent = fixture.debugElement.query(By.css('app-prod-detail'));
    const pid = childComponent.properties["item"][0].pid;
    childComponent.triggerEventHandler('removeprod', pid)
    let index = component.productArr.findIndex((item: any) => item.deptno == pid);
    expect(index).toBe(-1);
  });

});
