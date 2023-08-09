import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  title: string = 'Cart';
  products: any[] =[];
  cart: any[] = [];
  total: number = 0;
  cart_count: number = 0;

  constructor(
    private storageService: StorageService,
    ) { }

  ngOnInit() {
    this.getStorageCartAndProducts();
  }

  async getStorageCartAndProducts() {
    await this.getStorageCart();
    await this.getStorageProducts();
    this.calculateTotal();
    this.updateCartCount();
  }

  async getStorageCart(){
    await this.storageService.get('cart').then((res:any)=> {
      this.cart = JSON.parse(res.value);
    });
  }

  async getStorageProducts(){
    await this.storageService.get('products').then((res:any)=> {
      this.products = JSON.parse(res.value);
    });
  }

  async addToCart(product: any, form: NgForm): Promise<void> {
    await this.getStorageCart();
    product = {...product, qty: product.qty ?? 0};
    this.cart.push(product);
    this.storageService.set('cart', this.cart);
    this.calculateTotal();
    this.updateCartCount();
    form.resetForm();
  }

  async removeItemFromCart(index: number): Promise<void> {
    await this.getStorageCart();
    this.cart.splice(index, 1);
    this.storageService.set('cart', this.cart);
    this.updateCartCount();
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.cart.reduce((acc, item) => acc + (item.qty * item.price), 0);
  }

  updateCartCount(): void {
    this.cart_count = this.cart.length;
  }


}
