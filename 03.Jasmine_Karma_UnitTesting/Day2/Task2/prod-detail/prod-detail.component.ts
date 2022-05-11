import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-prod-detail',
  templateUrl: './prod-detail.component.html',
  styleUrls: ['./prod-detail.component.css']
})
export class ProdDetailComponent implements OnInit {


  @Input()
  item: any= {};

  @Output() onremoveprod = new EventEmitter<number>();

  public removeprod(dno: number)
  {
  // event emitting
    this.onremoveprod.emit(dno);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
