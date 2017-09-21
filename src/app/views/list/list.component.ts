import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaderResponse } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

//api
import { ApiService } from '../../api.service';

//class
import { View } from '../../view';

//chart test
import { D3Service, D3, Selection } from 'd3-ng2-service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  views:View[];
  error: string;
  cols: any[];
  cars: any[];

  private d3: D3; // <-- Define the private member which will hold the d3 reference
  private parentNativeElement: any;

  constructor(
    private apiService: ApiService,
    private router: Router,
    element: ElementRef,
    d3Service: D3Service
   // private httpClient: HttpClient
  ) {}

  ngOnInit() {
    
    

    this.apiService.getViews()
    .subscribe(
      response => 
      {this.views = response,
          console.log('Response views')
          console.log(this.views)
        }, 
      (error: HttpHeaderResponse) => {
        console.log('Subcribe login')
        console.log(error)
        this.loginError(error)})  
      
      
      }


  loginError(error: HttpHeaderResponse){
    console.log('Error')
    console.log(error)
    //console.log(error.name)
    //console.log(error.stack)
    if( error.status === 401){
    console.log('je bila napaka : 401')
    //this.router.navigate(['/login'])
    }
  else { console.log('ni bilo 401')}
  }

  clickOnView(view: View){
    this.router.navigate(['/views', view.id])
    console.log(view.id)
  }

}
