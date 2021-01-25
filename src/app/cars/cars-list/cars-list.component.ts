import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Car} from '../models/car';
import {TotalCostComponent} from '../total-cost/total-cost.component';
import {CarsService} from '../cars.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'cs-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less']
  // encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit, AfterViewInit {
  @ViewChild('totalCostRef') totalCostRef: TotalCostComponent;
  totalCost: number;
  grossCost: number;
  cars: Car[];
  carForm: FormGroup;

  constructor(private carsService: CarsService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.loadCars();
    this.carForm = this.buildCarForm();
  }

  buildCarForm(): FormGroup {
    return this.formBuilder.group({
      model: ['', Validators.required],
      type: ['', Validators.required],
      year: ['', Validators.required],
      color: ['', Validators.required],
      cost: ['', Validators.required],
      isFullyDamaged: '',
      clientFirstName: ['', Validators.required],
      clientSurname: ['', Validators.required],
      power: ['', Validators.required],
      plate: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(7)]],
      deliveryDate: ['', Validators.required],
      deadline: ['', Validators.required]
    });
  }

  loadCars(): void {
    this.carsService.getCars().subscribe((cars) => {
      this.cars = cars;
      this.countTotalCost();
    });
  }

  addCar(): void {
    this.carsService.addCar(this.carForm.value).subscribe(() => {
      this.loadCars();
    });
  }

  goToCarDetails(car: Car): void {
    this.router.navigate(   ['/cars', car.id]);
  }

  removeCar(car: Car, event): void {
    event.stopPropagation();
    this.carsService.removeCar(car.id).subscribe(() => {
      this.loadCars();
    });
  }

  ngAfterViewInit(): void {
    this.totalCostRef.showGross();
  }

  showGross(): void {
    this.totalCostRef.showGross();
  }

  countTotalCost(): void {
    this.totalCost = this.cars
      .map((car) => car.cost)
      .reduce((prev, next) => prev + next);
  }

  onShownGross(grossCost: number): void {
    this.grossCost = grossCost;
  }

}
