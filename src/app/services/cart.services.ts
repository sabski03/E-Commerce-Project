import { Injectable } from '@angular/core';
import { Product } from '../home/home.component';

@Injectable({
    providedIn: 'root'
})
    export class CartService {
        cartItems: Product[] = [];
  
        constructor() { }
  
        addToCart(product: Product): void {
        this.cartItems.push(product);
        console.log('Product added to cart:', product);
        console.log('Cart items:', this.cartItems);
    }
  
    getCartItems(): Product[] {
      console.log('Retrieving cart items:', this.cartItems);
      return this.cartItems;
    }
}
