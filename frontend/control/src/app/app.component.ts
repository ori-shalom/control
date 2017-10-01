import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tasks = [{ task: 'abc', time: '8:00'},
    { task: 'def', time: '7:00' }];
}
