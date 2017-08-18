import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


import { PositionSet } from '../../position-set';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-view-grid',
  templateUrl: './view-grid.component.html',
  styleUrls: ['./view-grid.component.css']
})
export class ViewGridComponent implements OnInit {
  simpleViewItem:PositionSet[];
  viewId: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.getView().subscribe(s => this.simpleViewItem=s)
    
  };
  getView(): Observable<PositionSet[]>{
    return this.apiService.getView(this.route.snapshot.url[1].toString()).map(view=> view.position_set)
  }
  goToItem(item: PositionSet){
    this.router.navigate(['/views',this.route.snapshot.url[1].path, item.id])
  }

}
