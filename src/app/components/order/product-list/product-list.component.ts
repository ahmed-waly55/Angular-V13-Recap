import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList:Iproduct[];
  constructor() {
    this.productList = [
      {id:1,name:'product 1',price:100,quantity:10,imgUrl:'https://picsum.photos/200',categoryId:1},
      {id:2,name:'product 2',price:200,quantity:20,imgUrl:'https://picsum.photos/200',categoryId:1},
      {id:3,name:'product 3',price:300,quantity:30,imgUrl:'https://picsum.photos/200',categoryId:2},
      {id:4,name:'product 4',price:400,quantity:40,imgUrl:'https://picsum.photos/200',categoryId:2},
    ]
  }

  ngOnInit(): void {
  }

  buy(productId:number,quantity:string){
    console.log(`product id: ${productId} , quantity: ${quantity}`);
    console.log(typeof +quantity);
  }
}
