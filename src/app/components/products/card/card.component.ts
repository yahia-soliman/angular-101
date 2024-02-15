import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Iproduct } from 'src/app/shared/interfaces/iproduct';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  constructor (private service: ProductService) {}

  @Input()
  product = {} as Iproduct;

  buy() {
    this.service.addToCart();
  }

  deleteProduct() {
    this.service.delete(this.product.id);
  }

  setAltImg() {
    this.product.img = '/assets/images/alt.png'
  }
}
