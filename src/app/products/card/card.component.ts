import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  product: {
    id: number,
    name: string,
    qty: number,
    price: number,
    img: string,
  } = {id: 0, name: '', qty: 0, price: 0, img: ''};
  @Output()
  onBuy = new EventEmitter();

  buy() {
    this.product.qty--;
    this.onBuy.emit()
  }
}
