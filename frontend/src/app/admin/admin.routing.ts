import { DashboardComponent } from './dashboard/dashboard.component';
import { AllCarsComponent } from './cars/all-cars/all-cars.component';
import { AddOldCarComponent } from './cars/add-old-car/add-old-car.component';
import { AddNewsComponent } from './news/add-news/add-news.component';
import { AllNewsComponent } from './news/all-news/all-news.component';

import { LoginComponent } from './login/login.component';
import {Routes, RouterModule} from '@angular/router';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { NgModule } from '@angular/core';


const routes : Routes =[
    {path:'', component:DashboardComponent},
    {path:'login', component:LoginComponent},
    {path:'addNews', component:AddNewsComponent},
    {path:'seeNews', component:AllNewsComponent},
    {path:'addOldCars', component:AddOldCarComponent}, 
    {path:'allOldCars', component:AllCarsComponent}
    // {
    //     path:'', component:AdminLayoutComponent, children:[
    //         // {path:'', redirectTo:'admin/login', pathMatch:'full'},
    //         {path:'new', component:AllNewsComponent},
    //         {path:'addNew', component:AddNewsComponent}

    //     ]
    // }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  
  export class AdminRoutingModule{

  }