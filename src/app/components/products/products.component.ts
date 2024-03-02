import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: Product[] = [];
  constructor(private productsService: ProductsService) {}

  getAllProducts() {
    this.productsService.getAllSimple().subscribe((products) => {
      this.products = products;
    });
  }
  ngOnInit(): void {
    this.getAllProducts();
  }
}
