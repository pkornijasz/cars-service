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

  addCar(car: Car): Observable<Car> {
    // console.log('Wywołano addCar');
    return this.http.post<Car>(this.apiUrl, car);
  }

  updateCar(id: number, car: Car): Observable<Car> {
    // @ts-ignore
    return this.http.put(this.apiUrl + `/${id}`, car);
    // .map((res) => res.json());
  }

  removeCar(id: number): Observable<Car> {
    // @ts-ignore
    return this.http.delete(this.apiUrl + `/${id}`);
    // .map((res) => res.json());
  }
}
