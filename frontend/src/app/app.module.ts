import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { HeaderComponent } from './header/header.component';
import { OldCarsComponent } from './old-cars/old-cars.component';
import { NewCarsComponent } from './new-cars/new-cars.component';
import { SentCarComponent } from './sent-car/sent-car.component';
import { SearchNewsPipe } from './shared/searchNews.pipe';
import { AddNewsComponent } from './admin/news/add-news/add-news.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    AddNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
