// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-products',
//   templateUrl: './products.page.html',
//   styleUrls: ['./products.page.scss'],
// })
// export class ProductsPage implements OnInit {
//   title: string = 'Products';
//   products: any[] = [
//     {
//       'product_name': 'product 1',
//       'date_created': 'August 4, 2023'
//     },
//     {
//       'product_name': 'product 2',
//       'date_created': 'August 5, 2023'
//     }
//   ];

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})

export class ProductsPage implements OnInit {

  title = 'Product List';
  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
   this.productService.getProducts().subscribe((res: any) => {
    console.log(res);
    
   });
  }

}
