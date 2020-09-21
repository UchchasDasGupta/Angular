import { CustomerService } from './../services/customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  CustomerId:string="";
  CustomerName:string="";
  customers:any[];
  constructor(private customnerservice:CustomerService) { 
  }
  ngOnInit(): void {
    this.customnerservice.getAllCustomer().subscribe(data=>{
      this.customers=data;
    },
    error=>{
      alert("Server Error")
    }
    )
  }

  rowclick(rowdata):void
  {
    this.CustomerId=rowdata.customerId;
    this.CustomerName=rowdata.name;
  }

}
