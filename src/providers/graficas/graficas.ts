import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GraficasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GraficasProvider {

  constructor(public http: HttpClient) {
    console.log('Hello GraficasProvider Provider');
  }

  getGrafica(){    
    return this.http.get("https://www.quandl.com/api/v3/datasets/EOD/V.json?api_key=WjuVsRMfe9rGgXHrHWJk");
  }

}
