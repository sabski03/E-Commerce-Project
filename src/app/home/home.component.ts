import { Component } from '@angular/core';

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
    new Product('Ergomic Sofa', 'assets/product-5.png', 43.00)
  ];
}

export class Product {
  constructor(
    public name: string,
    public imageUrl: string,
    public price: number
  ) {}
}
