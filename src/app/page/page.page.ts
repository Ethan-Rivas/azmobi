import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ApiService } from '../services/api.service';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-page',
  templateUrl: './page.page.html',
  styleUrls: ['./page.page.scss'],
})
export class PagePage implements OnInit {
  page: any;
  content: any;

  constructor(
    public api: ApiService,
    public route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.page = {"data": {}};
  }

  ngOnInit() {
    this.initData();
  }

  private async initData() {
    this.page = await this.api.getPage(this.route.snapshot.params['id']);
    this.content = this.sanitizer.bypassSecurityTrustHtml(this.page.data.content);
  }

}
