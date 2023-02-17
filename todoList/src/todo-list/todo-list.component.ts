import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'tdlst',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class TodoListComponent implements OnInit {
  public todos: Todo[] = [
    { label: 'manger', done: false },
    { label: 'dormir', done: false },
  ];
  constructor() {}

  ngOnInit() {}
}
