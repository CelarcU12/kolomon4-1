import { Component, OnInit, Input, Output } from '@angular/core';

import * as moment from 'moment';

import { Graph } from '../../graph';
import { GraphSet } from '../../graph-set';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-chart-data',
  templateUrl: './chart-data.component.html',
  styleUrls: ['./chart-data.component.css']
})
export class ChartDataComponent implements OnInit {

  @Input() chart: GraphSet
  @Input() dateFrom;


  graphValue: number[];
  graphTime: string[];
  dateTo= moment().format('YYYY-MM-DD')+'%20'+moment().subtract(0,'hours').format('HH:mm')+':00'; 

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.getData()
  }
  getData(){
   this.apiService.getData(this.chart.plot_code, this.chart.partab,this.dateFrom,this.dateTo)
    .subscribe(graph=> {
      this.graphValue=graph.map(g=>g.value);
      this.graphTime=graph.map(t=> t.date)
    })
  }

}
