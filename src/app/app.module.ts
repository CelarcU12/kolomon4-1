import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RoutingModule } from './routing.module';

import { ApiService } from './api.service';
import { AppComponent } from './app.component';
import { ListComponent } from './views/list/list.component';
import { ViewGridComponent } from './view/view-grid/view-grid.component';
import { SimpleViewItemComponent } from './view/simple-view-item/simple-view-item.component';
import { ChartComponent } from './view-item/chart/chart.component';
import { SimpleChartComponent } from './view/simple-chart/simple-chart.component';


import { ChartDataComponent } from './view-item/chart-data/chart-data.component';
import { LoginComponent } from './login/login.component';

//primeNg
// import {AccordionModule} from 'primeng/primeng';     //accordion and accordion tab
// import {MenuItem} from 'primeng/primeng'; 
// import {DataListModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ViewGridComponent,
    SimpleViewItemComponent,
    ChartComponent,
    SimpleChartComponent,
    ChartDataComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
    // DataListModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
