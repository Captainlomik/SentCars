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
import { AddNewsComponent } from './admin/news/add-news/add-news.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { OldCarDetailComponent } from './oldCar/old-car-detail/old-car-detail.component';
import { NewCarDetailComponent } from './newCar/new-car-detail/new-car-detail.component';
import { AddOldCarComponent } from './admin/cars/add-old-car/add-old-car.component'
import { SearchCarPipe } from './shared/Pipes/car.pipe';
import { AllNewsComponent } from './admin/news/all-news/all-news.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsDetailComponent,
    HeaderComponent,
    OldCarsComponent,
    NewCarsComponent,
    SentCarComponent,
    SearchNewsPipe,
    AddNewsComponent,
    OldCarDetailComponent,
    NewCarDetailComponent,
    AddOldCarComponent,
    SearchCarPipe,
    AllNewsComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    QuillModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
