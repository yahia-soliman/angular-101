import { Iproduct } from '../shared/interfaces/iproduct';
import { Injectable } from '@angular/core';

import productsData from '../shared/data/products.list';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Iproduct[] = productsData;
  cart = 0;

  getAll() { return this.products }

  getOne(id: string): Iproduct | undefined {
    return this.products.find((item) => item.id === id);
  }

  create(product: Iproduct) {
    product.id = Math.random().toString(36).slice(2, 7);
    this.products.push(product);
    return this.products;
  }

  update(data:Iproduct) {
    const idx = this.products.findIndex(item => item.id === data.id);
    this.products[idx] = data;
    return this.products;
  }

  delete(id: string) {
    const idx = this.products.findIndex(item => item.id === id);
    this.products.splice(idx, 1);
    return this.products;
  }

  addToCart() { this.cart++; }
}
