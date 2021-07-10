import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { HeaderComponent } from './header/header.component';
import { OldCarsComponent } from './oldCar/old-cars/old-cars.component';
import { NewCarsComponent } from './newCar/new-cars/new-cars.component';
import { SentCarComponent } from './sent-car/sent-car.component';
import { SearchNewsPipe } from './shared/Pipes/searchNews.pipe';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { OldCarDetailComponent } from './oldCar/old-car-detail/old-car-detail.component';
import { NewCarDetailComponent } from './newCar/new-car-detail/new-car-detail.component';
import { AddOldCarComponent } from './admin/cars/add-old-car/add-old-car.component'
import { SearchCarPipe } from './shared/Pipes/car.pipe';
import { MainPageComponent } from './main-page/main-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsDetailComponent,
    HeaderComponent,
    OldCarsComponent,
    NewCarsComponent,
    SentCarComponent,
    OldCarDetailComponent,
    NewCarDetailComponent,
    SearchCarPipe,
    SearchNewsPipe,
    NewsComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    QuillModule.forRoot(),   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
