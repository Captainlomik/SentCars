import { AddNewsComponent } from './admin/news/add-news/add-news.component';
import { SentCarComponent } from './sent-car/sent-car.component';
import { NewCarsComponent } from './newCar/new-cars/new-cars.component';
import { OldCarsComponent } from './oldCar/old-cars/old-cars.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsComponent } from './news/news.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'news', component: NewsComponent },
  { path: 'news/:id', component: NewsDetailComponent},
  { path: 'oldCars', component: OldCarsComponent },
  { path: 'oldCars/:id', component: NewsDetailComponent },
  { path: 'newCars', component: NewCarsComponent },
  { path: 'newCars/:id', component: NewsDetailComponent },
  { path: 'sentCar', component: SentCarComponent },
  { path: 'addNews', component: AddNewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
