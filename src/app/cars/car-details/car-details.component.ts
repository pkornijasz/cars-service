import { Component, OnInit } from '@angular/core';
import {CarsService} from '../cars.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Car} from '../models/car';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'cs-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.less']
})
export class CarDetailsComponent implements OnInit {
  car: Car;
  carForm: FormGroup;

  constructor(private carsService: CarsService,
              private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadCar();
    this.carForm = this.buildCarForm();
  }

  buildCarForm(): FormGroup {
    return this.formBuilder.group({
      model: [this.car.model, Validators.required],
      type: [this.car.type, Validators.required],
      year: [this.car.year, Validators.required],
      color: [this.car.color, Validators.required],
      cost: [this.car.cost, Validators.required],
      isFullyDamaged: this.car.isFullyDamaged,
      clientFirstName: [this.car.clientFirstName, Validators.required],
      clientSurname: [this.car.clientSurname, Validators.required],
      power: [this.car.power, Validators.required],
      plate: [this.car.plate, [Validators.required, Validators.minLength(3), Validators.maxLength(7)]],
      deliveryDate: [this.car.deliveryDate, Validators.required],
      deadline: [this.car.deadline, Validators.required]
    });
  }

  // loadCar(): void {
  //   const id = +this.route.snapshot.params.id;
  //   this.carsService.getCar(id).subscribe((car) => {
  //     this.car = car;
  //   });
  // }
  loadCar(): void {
    this.car = this.route.snapshot.data.car;
  }

  updateCar(): void {
    this.carsService.updateCar(this.car.id, this.carForm.value).subscribe(() => {
      this.router.navigate(['/cars']);
    });
  }

}
