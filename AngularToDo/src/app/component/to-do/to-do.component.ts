import {Component, OnInit} from '@angular/core';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})
export class ToDoComponent implements OnInit {

  item = {
    name: '',
    isDone: false
  };
  items = [{
    name: 'Task 1',
    isDone: false
  }, {
    name: 'Task 2',
    isDone: true
  }];

  displayItems = []

  constructor(private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  addTask() {
    if(this.item.name==""){
      return this.toastr.error('enter Task first', 'validation error');
    }
      const item = JSON.parse(JSON.stringify(this.item));
      this.items.push(item);
      this.item.name = "";
  }

  changestatus(i) {
    this.items[i].isDone = !this.items[i].isDone;
  }

  deleteTask(i) {
    this.items.splice(i, 1);
    this.toastr.success('Delete Successfully ......', 'success message');
  }

  getAll() {
    this.displayItems = this.items;
  }

  getCompleted() {
    this.displayItems = this.items.filter(i => i.isDone);
  }

  getActive() {
    this.displayItems = this.items.filter(i => !i.isDone);
  }

  getActiveCount() {
    return this.items.filter(i => !i.isDone).length;
  }

  clearCompleted() {

    this.items = this.items.filter(i => !i.isDone);
    this.getAll();
    this.toastr.success('Delete Successfully ......', 'success message');
  }
}
