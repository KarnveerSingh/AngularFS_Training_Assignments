import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit {

  validatePatternForVRN = "^[A-Z0-9]{10}$";

  vehicleRegForm:FormGroup = new FormGroup({
    oname : new FormControl("",Validators.required),
    contactno : new FormControl("",[Validators.required,Validators.pattern("\\d{10}")]),
    oemail : new FormControl("",[Validators.required,Validators.email]),
    vrn : new FormControl("",[Validators.required, Validators.pattern(this.validatePatternForVRN)]),
    address : new FormControl("",Validators.required),
    model : new FormControl("",Validators.pattern("\\d{10}")),
    color : new FormControl("",Validators.required),
    year : new FormControl("",[Validators.required,Validators.min(2012),Validators.max(2022)]),
  });
  constructor() { }

  ngOnInit(): void {
    
  }


  submit_click(){
    console.log(this.vehicleRegForm.value)
  }



  
}
