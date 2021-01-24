import { Injectable } from '@angular/core';
import {Car} from './models/car';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private apiUrl = 'http://localhost:3000/api/cars';
  randomValue = Math.random();
  // @ts-ignore
  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    // @ts-ignore
    return this.http.get(this.apiUrl);
      // .map((res) => res.json());
  }

  getCar(id: number): Observable<Car> {
    // @ts-ignore
    return this.http.get(this.apiUrl + `/${id}`);
      // .map((res) => res.json());
  }
}
