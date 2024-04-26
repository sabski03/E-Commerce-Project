import { Component } from '@angular/core';
import { CartService } from '../services/cart.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Product[] = [
    new Product('Nordic Chair', 'assets/product-3.png', 50.00),
    new Product('Nordic Chair', 'assets/product-1.png', 50.00),
    new Product('Kruzo Aero Chair', 'assets/product-2.png', 78.00),
    new Product('Ergonomic Chair', 'assets/product-4.png', 43.00),
    new Product('Ergonomic Sofa', 'assets/product-5.png', 43.00)
  ];

  constructor(private cartService: CartService) { }

  message: string = '';
  addToCart(product: Product): void {  
    this.cartService.addToCart(product);
    this.message = 'Product added to cart: ' + product.name;
  }
}

export class Product {
  public hovered: boolean = false;
  constructor(
    public name: string,
    public imageUrl: string,
    public price: number
  ) {}
}
