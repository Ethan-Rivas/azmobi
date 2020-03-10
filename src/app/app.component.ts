import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppState } from './injectors/app-state.injector';
import { environment, app } from '../environments/environment';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  app = "";
  pages = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public api: ApiService,
    public global: AppState,
    private menu: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.initData();
  }

  private async initData() {
    this.app = JSON.stringify(await this.api.getApp());

    let formattedApp = JSON.stringify(JSON.parse(this.app).data);
    let formattedTheme = JSON.parse(this.app).data.theme.title;

    this.pages = JSON.parse(this.app).data.pages;

    localStorage.setItem('app', formattedApp);
    this.global.set('theme', formattedTheme);
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  public async openMenu() {
    await this.menu.open();
  }
}
