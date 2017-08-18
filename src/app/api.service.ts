import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { View } from './view';
import { GraphSet } from './graph-set';
import { PositionSet } from './position-set';
import { Graph } from './graph';



@Injectable()
export class ApiService {
  url='/api/v1'

  views: View[];

  constructor(
    private http: Http,
    ) { }

  headers = new Headers({
  'Content-Type': 'application/json'
  });

  getViews(): Observable<View[]>{
    //get views from url
    return this.http.get(this.url+'/views')
    .map(response => this.views=response.json())
    .catch(this.getError)
    };
    
  getError(error : Response){
    console.error(error.status);
    return Observable.throw(error || "Get error")
  }
    
  
  getView(id: string): Observable<View>{
    console.log('get viev')
    console.log(this.getViews())
    return this
    .getViews()
    .map(views => views.find(view => view.id ===(+id)))
  }

  getData(name: string, param: number, dateFrom: string, dateTo:string): Observable<Graph[]>{
    return this.http
    .get(this.url+'/data'+'?station='+name+'&param='+(+param)+'&date_from='+dateFrom+'&date_to='+dateTo)
    .map(response => response.json())
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
          JSON.stringify({ username: username, password: password }
             
              ))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                if (response.status === 200){
                      console.log(response.status) 
                }
                else{
                  console.log(response.status) 
                  console.log('response error')}
            });
    }
    
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

}
