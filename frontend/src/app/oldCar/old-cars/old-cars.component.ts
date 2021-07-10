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
  flag: boolean = true

  constructor(private oldCarService: OldCarService) { }

  ngOnInit() {
    this.oldCarService.getAll().subscribe((car) => {
     for(let c of car){
       if(c.status === true)
       this.cars.push(c)
     }

    })
    this.fetchProduct(this.flag)
  }

  fetchProduct(flag: boolean) {
    // this.oldCarService.getAll().subscribe(car => {
    //   for(let c of car){
    //     if(c.status === true)
    //     console.log('lol')
    //       // this.cars = this.sort(car, flag)
    //     }
    //   //this.cars = this.sort(car, flag)
    // })

    this.sort(this.cars, flag)
  }

  sort(car, flag: boolean) {
    car.sort(function (a, b) {
      if (flag === true) {
        return a.price - b.price
      }
      else return b.price - a.price
    })
    return car
  }
}
