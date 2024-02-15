import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Iproduct } from 'src/app/shared/interfaces/iproduct';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
  constructor(private service: ProductService) {}

  products: Iproduct[] = this.service.getAll();
}
