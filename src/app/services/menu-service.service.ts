import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Menu } from '../models/menu';

@Injectable()
export class MenuServiceService {
  menuUrl = '/api/menu';

  constructor(private http: HttpClient) { }

  getMenu() {
    return this.http.get<Menu[]>(this.menuUrl);
  }

}
