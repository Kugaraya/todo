import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent {
  todoList : string[];
  doneList : string[];
  archiveList : string[];
  index : number;
  inputTodo : string;

  constructor() {
    this.todoList = [];
    this.doneList = [];
    this.archiveList = [];
    this.inputTodo = "";
    this.index = 0;
  }

  doCheck(item : string) {
    let tmp = this.todoList.indexOf(item);
    console.log(tmp);
    this.doneList[this.doneList.length] = this.todoList[tmp];
    this.todoList.splice(tmp, 1);
  }

  doRemove(item : string) {
    let tmp = this.todoList.indexOf(item);
    this.archiveList[this.archiveList.length] = this.todoList[tmp];
    this.todoList.splice(tmp, 1);
  }

  undoCheck(item : string) {
    let tmp = this.doneList.indexOf(item);
    this.todoList[this.todoList.length] = this.doneList[tmp];
    this.doneList.splice(tmp, 1);
  }

  toAdd(input : string) {
    this.todoList[this.todoList.length] = input;
    this.inputTodo = "";
  }
}
