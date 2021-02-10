import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CartService {
  // creating a item named Array
items = [];
  constructor() { }
// adding to CartService
addToCart(product) {
  console.log("addToCart(product) from cartService")
  console.log("before" + this.items);
    this.items.push(product);
  console.log("after" + this.items);
  }
  // fetch all items
getItems() {
    return this.items;
  }
  // clear the Cart
clearCart() {
    this.items = [];
    return this.items;
  }
}