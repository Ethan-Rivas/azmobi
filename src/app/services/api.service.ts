import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment, app } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  // Get App
  getApp() {
    return new Promise(resolve => {
      this.http.get(app.API + 'apps/' + app.ID)
        .subscribe(response => {
          //console.log(response);

          resolve(response);
         }, error => {
          console.log(error);
        });
    });
  }

  // Get Page
  getPage(page_id) {
    return new Promise(resolve => {
      this.http.get(app.API + 'pages/' + page_id)
        .subscribe(response => {
          //console.log(response);

          resolve(response);
         }, error => {
          console.log(error);
        });
    });
  }

}
