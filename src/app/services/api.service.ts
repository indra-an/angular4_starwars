import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {

  constructor(
     private http: Http,
  ) { }

  getData(path: string): Observable<any> {
    return this.http.get(
      `${environment.api_url}${path}`,
    )
    .catch( error => {
      return this.formatErrors(error);
    })
    .map((res: Response) => {
      console.log(res);
      return res.json();
    });
  }

  getDataFromRawUrl(path: string): Observable<any> {
    return this.http.get(
      `${path}`,
    )
    .catch( error => {
      return this.formatErrors(error);
    })
    .map((res: Response) => {
      console.log(res);
      return res.json();
    });
  }

  private formatErrors(error: any) {
     return Observable.throw(error.json());
  }

}
