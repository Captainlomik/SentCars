import { OldCar } from './../interfaces';
import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'searchCar'
})

export class SearchCarPipe implements PipeTransform{
    transform(cars:OldCar[], search=''):OldCar[] {
        if(search === '') return cars
        return cars.filter(car=>{
            return car.name.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim()) || 
            car.car_type.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim())
        })
        throw new Error("Method not implemented.");
    }
    
}