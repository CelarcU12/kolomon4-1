import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './views/list/list.component';
import { ViewGridComponent } from './view/view-grid/view-grid.component';
import { ChartComponent } from './view-item/chart/chart.component';
import { LoginComponent } from './login/login.component';

const routes: Routes =[
  {path: '', redirectTo:'views', pathMatch:'full'},
  {path:'views', component: ListComponent},
  {path:'login', component: LoginComponent},
  {path:'views/:viewId', component: ViewGridComponent},
  {path:'views/:viewId/:chartId', component: ChartComponent}
  
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes) 
  ],
  exports: [RouterModule],
  providers: [],
  declarations: []
})
export class RoutingModule { }