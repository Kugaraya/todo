import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {
  todoList : string[];
  doneList : string[];
  archiveList : string[];
  index : number;
  inputTodo : string;

  TODO_LIST_STORAGE_KEY = "todoList";
  DONE_LIST_STORAGE_KEY = "doneList";
  ARCHIVE_LIST_STORAGE_KEY = "archiveList";

  constructor() {
    
  }

  ngOnInit() {
    this.todoList = [];
    this.doneList = [];
    this.archiveList = [];
    this.inputTodo = "";
    this.index = 0;

    this.todoList = JSON.parse(localStorage.getItem(this.TODO_LIST_STORAGE_KEY)) || [];
    this.doneList = JSON.parse(localStorage.getItem(this.DONE_LIST_STORAGE_KEY))|| [];
    this.archiveList = JSON.parse(localStorage.getItem(this.ARCHIVE_LIST_STORAGE_KEY)) || [];
  }

  doCheck(item : string) {
    let tmp = this.todoList.indexOf(item);
    this.doneList[this.doneList.length] = this.todoList[tmp];
    this.todoList.splice(tmp, 1);

    localStorage.setItem(this.TODO_LIST_STORAGE_KEY, JSON.stringify(this.todoList));
    localStorage.setItem(this.DONE_LIST_STORAGE_KEY, JSON.stringify(this.doneList));
  }

  doRemove(item : string) {
    let tmp = this.todoList.indexOf(item);
    this.archiveList[this.archiveList.length] = this.todoList[tmp];
    this.todoList.splice(tmp, 1);

    localStorage.setItem(this.TODO_LIST_STORAGE_KEY, JSON.stringify(this.todoList));
    localStorage.setItem(this.ARCHIVE_LIST_STORAGE_KEY, JSON.stringify(this.archiveList));
  }

  undoCheck(item : string) {
    let tmp = this.doneList.indexOf(item);
    this.todoList[this.todoList.length] = this.doneList[tmp];
    this.doneList.splice(tmp, 1);

    localStorage.setItem(this.TODO_LIST_STORAGE_KEY, JSON.stringify(this.todoList));
    localStorage.setItem(this.DONE_LIST_STORAGE_KEY, JSON.stringify(this.doneList));
  }

  toAdd(input : string) {
    this.todoList[this.todoList.length] = input;
    this.inputTodo = "";

    localStorage.setItem(this.TODO_LIST_STORAGE_KEY, JSON.stringify(this.todoList));
  }
}
