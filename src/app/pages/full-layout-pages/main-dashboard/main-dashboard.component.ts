import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../../models/todo-item';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {
  todoItems: TodoItem[];
  todoList : string[];
  // doneList : string[];
  // archiveList : string[];
  index : number;
  inputTodo : string;

  TODO_LIST_STORAGE_KEY = "todoList";
  DONE_LIST_STORAGE_KEY = "doneList";
  ARCHIVE_LIST_STORAGE_KEY = "archiveList";
  TODO_ITEMS_STORAGE_KEY = "todoItems";

  constructor() {
    
  }

  get todoItemsForListing(): TodoItem[] {
    return this.todoItems.filter(todo => !todo.isDone && !todo.isArchived);
  }

  get doneList(): TodoItem[] {
    return this.todoItems.filter(todo => todo.isDone && !todo.isArchived);
  } 

  get archiveList(): TodoItem[] {
    return this.todoItems.filter(todo => todo.isArchived);
  }

  ngOnInit() {
    this.inputTodo = "";
    this.index = 0;

    this.todoItems = JSON.parse(localStorage.getItem(this.TODO_ITEMS_STORAGE_KEY)) || [];
  }

  doCheck(todoItem : TodoItem) {
    todoItem.isDone = true;

    localStorage.setItem(this.TODO_ITEMS_STORAGE_KEY, JSON.stringify(this.todoItems));
  }

  doRemove(todoItem : TodoItem) {
    todoItem.isArchived = true;

    localStorage.setItem(this.TODO_ITEMS_STORAGE_KEY, JSON.stringify(this.todoItems));
  }

  undoCheck(todoItem : TodoItem) {
    todoItem.isDone = false;

    localStorage.setItem(this.TODO_ITEMS_STORAGE_KEY, JSON.stringify(this.todoItems));
  }

  toAdd() {
    let newTodoItem = new TodoItem(this.inputTodo);
    this.todoItems.push(newTodoItem);
    this.inputTodo = "";

    localStorage.setItem(this.TODO_ITEMS_STORAGE_KEY, JSON.stringify(this.todoItems));
  }
}
