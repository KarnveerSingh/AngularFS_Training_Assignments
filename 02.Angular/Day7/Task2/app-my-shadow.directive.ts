import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyShadow]'
})
export class AppMyShadowDirective {

  @Input()
  appMyShadow:string = '';
  constructor(private _element: ElementRef) { }
  ngOnInit()
  {
    if(this.appMyShadow == "")
    {
       this.appMyShadow = "red";
    }

    this._element.nativeElement.style.color = this.appMyShadow;
    
  }
}
