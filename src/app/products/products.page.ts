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
import { StorageService } from '../services/storage.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})


export class ProductsPage implements OnInit {
  


  title: string  = 'Product List';
  products: any[] = [];
  cart: any[] = [];

  constructor(
    private productService: ProductService, 
    private storageService: StorageService,
    private navCtrl: NavController
    ) {}

  ngOnInit() {
    this.fetchProducts(); 
  }

  fetchProducts() {
   this.productService.getProducts().subscribe((res: any) => {
    // console.log(res);
    this.products = res.products;
    this.storageService.set('products', this.products);
   });
  }

  addToCart(product: any){
    // console.log(product);
    // console.log(product.qty);
    // this.storageService.set('product', product);
    product = {...product, qty: product.qty ?? 0};
    this.cart.push(product);
    this.storageService.set('cart', this.cart);
    // this.storageService.get('product').then((res: any) => {
    //   console.log(JSON.parse(res.value));
    // }).catch((error) => {
    //   console.log(error);
    // });
    // console.log(this.cart);
    this.navCtrl.navigateForward('/tabs/cart');
  }

}
