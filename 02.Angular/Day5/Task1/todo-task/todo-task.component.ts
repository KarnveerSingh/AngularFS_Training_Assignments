import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  inputItem:string = '';

  todoListObj:any[] =[
    {id:1,itemName:"learn react js basic",isDone:true},
    {id:2,itemName:"prectice react js",isDone:false},
    {id:3,itemName:"learn redux",isDone:false},
    {id:4,itemName:"code portfolio in react",isDone:false},
    {id:5,itemName:"learn react native",isDone:false}
  ];

  constructor() { }

  ngOnInit(): void {
  }



  addNew_click(){
    let todoObj:any = new Object();
    todoObj.itemName = this.inputItem;
    this.todoListObj.push(todoObj);
  }


  delete_click(id:number):void {
    let index = this.todoListObj.findIndex(item => item.id == id);
    this.todoListObj.splice(index, 1);
  }



  update_click(){

  }


  DeleteDone_click(){
    this.todoListObj = this.todoListObj.filter(todo => todo.isDone == false);
    
  }

  DeleteAll_click(){
    this.todoListObj = [{}];
  }
}
