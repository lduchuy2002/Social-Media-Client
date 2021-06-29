import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myapp';
  name = {
    a: 24,
  };
  constructor() {
    console.log('constructor');
  }
  OnInit() {
    console.log('Init');
  }
}
