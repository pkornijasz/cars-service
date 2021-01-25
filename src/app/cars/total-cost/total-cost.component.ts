import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CarsService} from '../cars.service';

@Component({
  selector: 'cs-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TotalCostComponent {
  @Input() totalCost: number;
  @Output() shownGross: EventEmitter<number> = new EventEmitter<number>();
  private VAT = 1.23;

  constructor(private carsService: CarsService) {
    console.log(carsService.randomValue, 'TotalCostComponent');
  }
  showGross(): void {
    this.shownGross.emit(this.totalCost * this.VAT);
  }
}
