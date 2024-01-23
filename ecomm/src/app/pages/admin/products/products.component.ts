import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  Panel: boolean = false;

  PanelNew(){
    this.Panel = true;
  }

  PanelClose(){
    this.Panel =  false;

  }

  productObj: any ={
    "productId" : 1,
    "productName": '',
    "productPrice":0,
    "createdDate":  new Date(),
    "categoryId": 0

  }
  CategoryList: any [] = [];
  // constructor(private productSrv: ProductService){

  // }

}
