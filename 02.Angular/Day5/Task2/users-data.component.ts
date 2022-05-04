import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.css']
})
export class UsersDataComponent implements OnInit {

  resObj:any = {};
  constructor(private httpclient: HttpClient) { }

  ngOnInit(): void {
  }


  getData(){
    const url = "https://reqres.in/api/users/";

    this.httpclient.get(url).subscribe(data => {
      this.resObj = data;
      console.log(data);

    })
  }
}
