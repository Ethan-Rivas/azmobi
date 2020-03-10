import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-app-info',
  templateUrl: './app-info.component.html',
  styleUrls: ['./app-info.component.scss'],
})
export class AppInfoComponent implements OnInit {
  app = {};
  pages = {};
  theme = '';

  constructor(
    public api: ApiService
  ) {
    this.initData();
  }

  ngOnInit() { }

  private async initData() {
    let requestedApp = JSON.stringify(await this.api.getApp());
    this.app = JSON.parse(requestedApp).data;
    this.pages = JSON.parse(requestedApp).data.pages;
    this.theme = JSON.parse(requestedApp).data.theme.title;
  }
}
