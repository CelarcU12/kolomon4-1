import { Component, OnInit, Input } from '@angular/core';

import { ApiService } from '../../api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Graph } from '../../graph';

import * as moment from 'moment';


@Component({
  selector: 'app-simple-chart',
  templateUrl: './simple-chart.component.html',
  styleUrls: ['./simple-chart.component.css']
})
export class SimpleChartComponent implements OnInit {
  @Input() graph: any;

  chartValue: number[];
  chartTime: string[];

  dateTo= moment().format('YYYY-MM-DD')+'%20'+moment().subtract(0,'hours').format('HH:mm')+':00'; 
  dateFrom= moment().startOf('day').format('YYYY-MM-DD')+'%20'+moment().startOf('day').format('HH:mm')+':00'; 

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getCahrtValue()

  }

  getCahrtValue() {
     this.apiService
     .getData(this.graph.name, this.graph.partab, this.dateFrom, this.dateTo)
      .subscribe(graph => 
        { this.chartValue=graph.map(v => v.value);
          this.chartTime=graph.map(time => time.date);
        })
    
  }
}
