import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-info',
  templateUrl: './app-info.component.html',
  styleUrls: ['./app-info.component.scss'],
})
export class AppInfoComponent implements OnInit {
  app = {}

  constructor() {
    this.app = JSON.parse(localStorage.getItem('app'));
  }

  ngOnInit() { }

}
