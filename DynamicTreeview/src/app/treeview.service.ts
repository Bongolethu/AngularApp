import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Itreeview } from './itreeview';

@Injectable()
// This service gets data from the mentined service
// I added an interface becuase implementing this class requires a _serviceurl
// and if it was to grow then it would have a structure

export class TreeviewService implements Itreeview {
  _serviceurl: string;
  constructor(private http:Http)
  {
    this._serviceurl = 'http://localhost:64686/api/values';
  }
  public GetMenuTreeData() :Promise<any>
  {
      return  this.http.get(this._serviceurl)
      .toPromise();
  }

}
