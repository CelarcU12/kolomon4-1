import { Component, OnInit, Input } from '@angular/core';

import { PositionSet } from '../../position-set';

@Component({
  selector: 'app-simple-view-item',
  templateUrl: './simple-view-item.component.html',
  styleUrls: ['./simple-view-item.component.css']
})
export class SimpleViewItemComponent implements OnInit {
  @Input() simpleItem: PositionSet;
  graphData=[];
  constructor() { }

  ngOnInit() {
    this.getGraphData()
  }

  getGraphData(){
    
    for( let graph of this.simpleItem.graph_set){
      this.graphData.push({name: graph.plot_code, partab: graph.partab} )
    }
  }
}
