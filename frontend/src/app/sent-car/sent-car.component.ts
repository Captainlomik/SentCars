import { OldCar } from './../shared/interfaces';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { OldCarService } from '../shared/services/oldCar.services';

@Component({
  selector: 'app-sent-car',
  templateUrl: './sent-car.component.html',
  styleUrls: ['./sent-car.component.scss']
})
export class SentCarComponent implements OnInit {

  carForm: FormGroup;
  types:string[]=['Пикап', 'Минивен', 'Хетчбек']
  default:string = 'Пикап'

  constructor(private carService: OldCarService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.carForm = new FormGroup({
      name: new FormControl('', Validators.required),
      type: new FormControl(this.types[3]),
      price: new FormControl('', Validators.required),
      //color: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    })
    
  }
  
  submit() {

    const sent: OldCar = {
      name:this.carForm.value.name, 
      car_type:this.carForm.value.type, 
      price:this.carForm.value.price, 
      description:this.carForm.value.description
    }

    this.carService.create(sent).subscribe(()=>{
      console.log('done')
    })  }

}
