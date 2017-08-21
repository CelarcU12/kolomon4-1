import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { View } from './view';
import { GraphSet } from './graph-set';
import { PositionSet } from './position-set';
import { Graph } from './graph';

//const headers= new Headers({'Content-Type': 'application/json'});

@Injectable()
export class ApiService {
  url='http://kolomonko.arso.sigov.si:8000/api/v1'

  views: View[];

  constructor(
    private http: HttpClient,
    ) { }

  // headers = new HttpHeaders({
  // 'Content-Type': 'application/json'
  // });

  getViews(): Observable<any>{
    //get views from url
    return this.http.get(this.url+'/views');
  //   .catch(this.getError)
  //   };
    
  // getError(error : Response){
  //   console.error(error.status);
  //   return Observable.throw(error || "Get error")
 }
    
  
  getView(id: string): Observable<View>{
    console.log('get viev')
    console.log(this.getViews())
    return this
    .getViews()
    .map(views => views.find(view => view.id ===(+id)))
  }

  //spremembra iz Observable<Graph[]> v Obervable<any>
  getData(name: string, param: number, dateFrom: string, dateTo:string): Observable<any>{
    return this.http
    .get(this.url+'/data'+'?station='+name+'&param='+(+param)+'&date_from='+dateFrom+'&date_to='+dateTo)
  }

  getGraphSets(viewId: string, itemId: string): Observable<GraphSet[]>{
    return this
    .getView(viewId)
    .map(posSets =>posSets.position_set
      .find(graphs=> graphs.id ===(+itemId)).graph_set)
  }



  login(username: string, password: string){
      console.log('login metod') 
      console.log(JSON.stringify({ username: username, password: password }))
      
        return this.http.post(
          this.url+'/login/',
          "username="+username+"&"+"password="+password,
          {   headers: new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded'),
          withCredentials: true
          
        })
            
    }
    
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

}
