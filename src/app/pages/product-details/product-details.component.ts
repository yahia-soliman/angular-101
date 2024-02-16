import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Iproduct } from 'src/app/shared/interfaces/iproduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product = {} as Iproduct;
  sub?: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ProductService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.sub = this.service.getOne(id).subscribe({
      next: (prod) => this.product = prod as Iproduct,
      error: () => this.router.navigate(['404']),
    })
  }
  ngOnDestroy(): void { this.sub?.unsubscribe(); }
}
