import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';

@Injectable()
export class PeopleService {

  constructor(
    private apiService: ApiService,
  ) { }

  getList(): Observable<[any]> {
    return this.apiService.getData('people')
    .map(data => data.results);
  }

  getDetailFromUrl(path: string): Observable<[any]> {
    return this.apiService.getDataFromRawUrl(path)
    .map(data => data);
  }

}
