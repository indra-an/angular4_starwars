import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';

@Injectable()
export class FilmService {

  constructor(
    private apiService: ApiService,
  ) { }

  getList(): Observable<[any]> {
    return this.apiService.getData('films')
    .map(data => data.results);
  }

  getDetail(id: string): Observable<[any]> {
    return this.apiService.getData('films/'+ id)
    .map(data => data);
  }
}
