import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/products.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  public alertButtons = ['OK'];
  title: string = 'Cart';
  products: any[] =[];
  cart: any[] = [];

  constructor(
    // private productService: ProductService,
    private storageService: StorageService,
    ) { }

  ngOnInit() {
    // this.fetchProducts();
    this.storageService.get('cart').then((res:any)=> {
      this.cart = JSON.parse(res.value);
      console.log(JSON.parse(res.value));
    });
    this.storageService.get('products').then((res:any)=> {
      this.products = JSON.parse(res.value);
      console.log(JSON.parse(res.value));
    });
  }

  // fetchProducts() {
  //   this.productService.getProducts().subscribe((res: any)=>{
  //     this.products = res.products;
  //   });
  // }

}
