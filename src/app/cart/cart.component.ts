import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.services';
import { Product } from '../home/home.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    console.log('Cart items in CartComponent:', this.cartItems);
  }
}

