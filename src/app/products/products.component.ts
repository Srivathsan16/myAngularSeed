

import { Component, OnInit} from '@angular/core';
import {IProduct} from './products'
import {ProductService} from './products.service';

@Component({
    selector: 'product-sri',
    templateUrl: './products.component.html',
    //styles:['thead{color:red}']
    styleUrls:['./products.component.css']
  })

  export class ProductComponent implements OnInit{
    show:boolean;
    myFilter="Name"
    products:IProduct[]

constructor(private _productService:ProductService){}


ngOnInit(){
  console.log('Hello there I am coming here<<<<<init>>>>>>>>>>>');
   this._productService.getProduct().subscribe((products) => this.products=products);
}

toggleTable():void{
  if(this.show==true){
    this.show=false;
  }
  else{
  this.show=true;
  }
}
onInit(){
let title = "### Sri Product List";
}
  }