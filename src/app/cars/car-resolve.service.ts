import {CarsService} from './cars.service';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Car} from './models/car';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class CarResolveService implements Resolve<Car>{
  constructor(private carsService: CarsService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Car> {
    return this.carsService.getCar(route.params.id);
  }

}
