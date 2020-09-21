import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  GetAllItem()
  {
    return this.http.get<any[]>(environment.apiurl+"/Item/GetAllItem")
  }
}
