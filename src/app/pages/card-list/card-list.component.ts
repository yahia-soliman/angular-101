import { ProductService } from 'src/app/services/product.service';
import { Iproduct } from 'src/app/shared/interfaces/iproduct';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit, OnDestroy{
  sub?: Subscription;
  products: Iproduct[] = [];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.sub = this.service.getAll().subscribe({
      next: (data) => this.products = data as []
    })
  }

  ngOnDestroy(): void { this.sub?.unsubscribe(); }

  deleteProduct(id: string) {
    this.service.delete(id).subscribe({
      complete: () => this.products = this.products.filter(item => item.id !== id)
    });
  }
}
