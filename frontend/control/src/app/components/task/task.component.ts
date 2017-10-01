import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input()
  task;

  constructor() { }

  ngOnInit() {
    console.log(JSON.stringify(this.task));
  }

}
