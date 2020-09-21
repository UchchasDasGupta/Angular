import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAllCustomer()
  {
    return this.http.get<any[]>(environment.apiurl+"/Customer/GetAllCustomer")
  }
}
