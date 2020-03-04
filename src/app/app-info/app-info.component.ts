import { Component, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-app-info',
  templateUrl: './app-info.component.html',
  styleUrls: ['./app-info.component.scss'],
})
export class AppInfoComponent implements OnInit {
  app = {};

  constructor(
    public api: ApiService
  ) {
    this.initData();
  }

  ngOnInit() { }

  private async initData() {
    this.app = await this.api.getApp();
  }

}
