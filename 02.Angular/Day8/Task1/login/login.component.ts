import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uid:string = "admin@gmail.com";
  pwd:string = "admin123";
  result:string = "";
  constructor() { }

  ngOnInit(): void {
  }


  public login_click():void
   {
       
   }
}
