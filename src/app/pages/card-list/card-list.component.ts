import { Component } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
  srcRoot = '/assets/images/product';
  cart = 0;
  products: {
    id: number,
    name: string,
    qty: number,
    price: number,
    img: string,
  }[] = [
      { id: 1, price: 63, qty: 2, img: this.srcRoot + '1.png',
      name: "Green jacket" },
      { id: 2, price: 42, qty: 5, img: this.srcRoot + '2.png',
      name: "Jeans jacket" },
      { id: 3, price: 25, qty: 1, img: this.srcRoot + '3.png',
      name: "Toddler t-shirt" },
      { id: 4, price: 29, qty: 0, img: this.srcRoot + '4.png',
      name: "Beautiful blouse" },
      { id: 5, price: 23, qty: 4, img: this.srcRoot + '5.png',
      name: "Baby white shirt" },
      { id: 6, price: 56, qty: 2, img: this.srcRoot + '6.png',
      name: "Pink dress" },
      { id: 7, price: 26, qty: 2, img: this.srcRoot + '7.png',
      name: "Baby pink shirt" },
      { id: 9, price: 46, qty: 2, img: this.srcRoot + '9.png',
      name: "Wool shirt" },
  ];

  addToCart() {
    this.cart++;
  }
}
