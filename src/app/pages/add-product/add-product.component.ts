import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  @Input() product: {
    id?: number,
    name?: string,
    qty?: number,
    price?: number,
    img?: string,
  } = {}

  addProduct() {
  }
}
