import { Directive, OnChanges,Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[userIsAdmin]'
})
export class AdminpanelDirective implements OnChanges {


  @Input()
  userIsAdmin: string = '';

  constructor(private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>) { }


  ngOnChanges() {

    if (this.userIsAdmin.toLocaleLowerCase() != 'sam') {
     
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
    else {
      
      this.viewContainer.clear();
    }
  }
}
