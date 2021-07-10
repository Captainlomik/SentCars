import { Component, OnInit } from '@angular/core';
import { OldCar } from 'src/app/shared/interfaces';
import { OldCarService } from 'src/app/shared/services/oldCar.services';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.scss']
})


export class AllCarsComponent implements OnInit {
  cars: OldCar[] = []
  flag: boolean = true

  constructor(private oldCarService: OldCarService) { }

  ngOnInit() {
    this.oldCarService.getAll().subscribe((car) => {
      this.cars = car;
    })
    this.fetchProduct(this.flag)
  }

  fetchProduct(flag: boolean) {
    this.oldCarService.getAll().subscribe(car => {
      this.cars = this.sort(car, flag)
    })
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

  remove(id:any){
    this.oldCarService.delete(id).subscribe(()=>{
      this.ngOnInit()
    })
  }

  accept(car:OldCar){
    this.oldCarService.update(car.id, {
      status:true
    }).subscribe(()=>{
      this.ngOnInit()
    })
  }

 
}
