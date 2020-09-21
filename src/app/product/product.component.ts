import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  items:any[];
  constructor(private productservice:ProductService) {}

  ngOnInit(): void {
    this.productservice.GetAllItem().subscribe(data=>{
      this.items=data;
    },
    error=>{
      alert("Server Error")
    }
      )
  }

}
