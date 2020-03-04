import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment, APP_ID, API } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getApp() {
    return new Promise(resolve => {
      this.http.get(API + 'apps/' + APP_ID)
        .subscribe(response => {
          //console.log(response);

          resolve(JSON.parse(JSON.stringify(response)).data);
         }, error => {
          console.log(error);
        });
    });
  }

}
