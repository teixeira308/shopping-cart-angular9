import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {
  items = [];

  constructor(
    private http: HttpClient
  ) {}


  addToCart(product) {
    this.items.push(product);
  }

  dropFromCart(product) {
    let produtoDeletar = this.items.indexOf(product);
    this.items.splice(produtoDeletar,1);
    return this.items;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}