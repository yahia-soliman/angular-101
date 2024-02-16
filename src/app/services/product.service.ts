import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iproduct } from '../shared/interfaces/iproduct';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  dbUrl = 'http://localhost:3000/products/';
  cart = 0;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.dbUrl);
  }

  getOne(id: string) {
    return this.http.get(this.dbUrl + id);
  }

  create(product: Iproduct) {
    return this.http.post(this.dbUrl, product);
  }

  update(data: Iproduct) {
    return this.http.put(this.dbUrl + data.id, data);
  }

  delete(id: string) {
    return this.http.delete(this.dbUrl + id);
  }

  addToCart() { this.cart++; }
}
