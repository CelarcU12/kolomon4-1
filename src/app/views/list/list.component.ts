import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

//api
import { ApiService } from '../../api.service';

//class
import { View } from '../../view';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  views:View[];
  error: string;

  constructor(
    private apiService: ApiService,
    private router: Router,
   // private httpClient: HttpClient
  ) { }

  ngOnInit() {

    this.apiService.getViews()
    .subscribe(
      response => 
        this.views = response, 
      (error) => this.loginError(error))  
  }

  loginError(error){
    console.log('Error')
    console.log(error)
    //console.log(error.name)
    //console.log(error.stack)
    if( error === 401){
    this.router.navigate(['/login'])}
  }

  clickOnView(view: View){
    this.router.navigate(['/views', view.id])
    console.log(view.id)
  }

}
