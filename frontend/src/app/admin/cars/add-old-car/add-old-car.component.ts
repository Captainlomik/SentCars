import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OldCar } from 'src/app/shared/interfaces';
import { OldCarService } from 'src/app/shared/services/oldCar.services';

@Component({
  selector: 'app-add-old-car',
  templateUrl: './add-old-car.component.html',
  styleUrls: ['./add-old-car.component.scss']
})
export class AddOldCarComponent implements OnInit {

  carForm: FormGroup;
  types = [{ name: "Пикап", id: 1 }, { name: 'Минивен', id: 2 }, { name: 'Хетчбек', id: 3 }]
  gear_cases = [{ name: "автомат", id: 1 }, { name: "механика", id: 2 }]
  colors = [{ name: 'черный', id: 1 }, { name: 'красный', id: 2 }, { name: 'белый', id: 3 }, { name: 'синий', id: 4 }, { name: 'зеленый', id: 5 }]
  gears = [{name:'передний', id:1}, {name:'задний', id:2}, {name:'4х4', id:3}]
 

  constructor(private carService: OldCarService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.carForm = new FormGroup({
      name: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required), 
      price: new FormControl('', Validators.required),
      kilometrage: new FormControl('', Validators.required),
      gear_case: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
      engine: new FormControl('', Validators.required),   
      gear:new FormControl('', Validators.required), 
      owner_count:new FormControl('', Validators.required),  
      description: new FormControl('', Validators.required),
      client_name: new FormControl('', Validators.required),
      client_phone: new FormControl('', Validators.required),
      client_email: new FormControl('', Validators.required)
    })


  }

  submit() {

    const sent: OldCar = {
      name: this.carForm.value.name,
      car_type: this.carForm.value.type.id,
      price: this.carForm.value.price,
      kilometrage: this.carForm.value.kilometrage,
      gear_case: this.carForm.value.gear_case.id,
      gear:this.carForm.value.gear.id,
      color: this.carForm.value.color.id,
      engine:this.carForm.value.engine,
      description: this.carForm.value.description,
      owner_count:this.carForm.value.owner_count,
      client_name: this.carForm.value.client_name,
      client_phone: this.carForm.value.client_phone,
      client_email: this.carForm.value.client_email,
      status: false
    }

    this.carService.create(sent).subscribe(() => {
      console.log('done')
    })
  }
}
