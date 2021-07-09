import { OldCarService } from '../../shared/services/oldCar.services';
import { OldCar } from '../../shared/interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-old-cars',
  templateUrl: './old-cars.component.html',
  styleUrls: ['./old-cars.component.scss']
})
export class OldCarsComponent implements OnInit {

 
  cars: OldCar[] = [] 
  constructor(private oldCarService:OldCarService) { }

  ngOnInit() {
    this.oldCarService.getAll().subscribe((car)=>{
      this.cars = car;
    })
  }
}
