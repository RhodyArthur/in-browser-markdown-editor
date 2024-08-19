import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '../interface/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonUrl = 'assets/data.json';

  constructor(private http: HttpClient) { }

  // get all data
  getData() {
    return this.http.get<Data[]>(this.jsonUrl)
  }
}
