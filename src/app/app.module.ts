import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, 
  HttpXsrfTokenExtractor, 
  HttpClientXsrfModule
} from '@angular/common/http';


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
import {DataTableModule,SharedModule} from 'primeng/primeng';

//D3 chart module
import { D3Service } from 'd3-ng2-service';

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
    HttpClientModule,
    RoutingModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'csrftoken',
    }),
    HttpClientXsrfModule.withOptions({
      cookieName: 'arso_cookie',
      headerName: 'arso_cookie',
    }),
    DataTableModule,
    SharedModule,
 


    // DataListModule
  ],
  providers:[ //{ provide: HttpXsrfTokenExtractor, useFactory: getTokenFactory  },
    ApiService,
    D3Service,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



export function getTokenFactory(){
 // new DOMSettableTokenList()
  
   
}
//}"\".eJxVjUEOwiAURO_C2hD8BaRduvcM5MNHQQ000CYa493FpAvdzrw382IW1yXatYVqHfpbyMQmRlfMl8J9yUtNjn8RvrWNnwqF-3Fjd78DEVvsNhogVGj8IMQopBSSzibAIEGPCgjgoFA5rf7l1I8Hve9ZC62lkm14zKk-2STeHwTiN9c:1dk8Oq:ieSZDs8oE9Me85OGMcisC_PN89k\""	
