import { OldCarService } from './../../shared/services/oldCar.services';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OldCar } from 'src/app/shared/interfaces';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-old-car-detail',
  templateUrl: './old-car-detail.component.html',
  styleUrls: ['./old-car-detail.component.scss']
})
export class OldCarDetailComponent implements OnInit {

  @Input() cars:OldCar[]= []
  cars$:Observable<OldCar>

  constructor(private carService:OldCarService, private route:ActivatedRoute) { 

    this.cars$ = this.route.params
      .pipe(switchMap((params: Params) => {
        let car = this.carService.getById(params['id']);
        return car;
      }))

  }

  ngOnInit() {
  }

}
