import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  title: string = 'Checkout';
  cart: any[] = [];
  total: number = 0;

  userData: any;

  constructor(
    private storageService: StorageService,
    // private cdr: ChangeDetectorRef
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getStorageCartAndTotal();
    // this.cdr.detectChanges();
    this.route.params.subscribe(() => {
      this.getStorageCartAndTotal();
    });
  }

  async getStorageCartAndTotal() {
    await this.getStorageCart();
    this.calculateTotal();
  }

  async getStorageCart(){
    await this.storageService.get('cart').then((res:any)=> {
      this.cart = JSON.parse(res.value);
    });
  }

  calculateTotal(): void {
    this.total = this.cart.reduce((acc, item) => acc + (item.qty * item.price), 0);
  }
  
}
