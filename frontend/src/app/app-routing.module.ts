import { AdminRoutingModule } from './admin/admin.routing';
import { MainPageComponent } from './main-page/main-page.component';
import { AllNewsComponent } from './admin/news/all-news/all-news.component';
import { NewCarDetailComponent } from './newCar/new-car-detail/new-car-detail.component';
import { AddNewsComponent } from './admin/news/add-news/add-news.component';
import { SentCarComponent } from './sent-car/sent-car.component';
import { NewCarsComponent } from './newCar/new-cars/new-cars.component';
import { OldCarsComponent } from './oldCar/old-cars/old-cars.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsComponent } from './news/news.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { OldCarDetailComponent } from './oldCar/old-car-detail/old-car-detail.component';


const routes: Routes = [
  {path:'', component:MainPageComponent},
  { path: 'news', component: NewsComponent },
  { path: 'news/:id', component: NewsDetailComponent},
  { path: 'oldCars', component: OldCarsComponent },
  { path: 'oldCars/:id', component: OldCarDetailComponent},
  { path: 'newCars', component: NewCarsComponent },
  { path: 'newCars/:id', component:NewCarDetailComponent},
  { path: 'sentCar', component: SentCarComponent },
  {path:'admin', loadChildren:'./admin/admin.module#AdminModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
