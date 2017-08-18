import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { GraphSet } from '../../graph-set';
import { ApiService } from '../../api.service';

import * as moment from 'moment'


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
    graphSets: GraphSet[];
    graph: GraphSet;
    dateFrom=moment().add(-24,'hours').format('YYYY-MM-DD-HH:mm')



  constructor(
    private activeRouter: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
   this.dateFrom=this.dateFrom.slice(0,10)+'%20'+this.dateFrom.slice(11,16)+':00';
    this.apiService.getGraphSets(this.activeRouter.snapshot.url[1].path,this.activeRouter.snapshot.url[2].path)
    .subscribe(graphs => {this.graphSets=graphs})
    
  }

  graphChecked(graph: GraphSet){
    if(graph.checked){
      graph.checked=false;
    }else{
      graph.checked=true;
    }
  }
  changeDate(steviloUr: number){
   this.dateFrom=moment().add(-steviloUr,'hours').format('YYYY-MM-DD-HH:mm');
    this.dateFrom=this.dateFrom.slice(0,10)+'%20'+this.dateFrom.slice(11,16)+':00';
  }

}
