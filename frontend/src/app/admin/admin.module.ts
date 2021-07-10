import { AddOldCarComponent } from './cars/add-old-car/add-old-car.component';
import { BrowserModule } from '@angular/platform-browser';
import { AdminRoutingModule } from './admin.routing';
import { AllNewsComponent } from './news/all-news/all-news.component';
import { AddNewsComponent } from './news/add-news/add-news.component';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';

import { ReactiveFormsModule, FormsModule, } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { SearchNewsPipe } from '../shared/Pipes/searchNews.pipe';
import { CommonModule } from '@angular/common';
import { AllCarsComponent } from './cars/all-cars/all-cars.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchCarPipe } from '../shared/Pipes/car.pipe';

@NgModule({
    declarations: [
        LoginComponent,
        AdminLayoutComponent,
        AddNewsComponent,
        AllNewsComponent,
        AllCarsComponent,
        AddOldCarComponent,
        DashboardComponent,
       
    ],
    imports: [ 
        CommonModule,
        RouterModule,
        AdminRoutingModule,
        FormsModule, 
        ReactiveFormsModule,
        HttpClientModule,
        QuillModule.forRoot(),
    ]
})

export class AdminModule { }