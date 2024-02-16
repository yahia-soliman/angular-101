import { ProductService } from 'src/app/services/product.service';
import { Iproduct } from '../../shared/interfaces/iproduct';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  product: Iproduct = {} as Iproduct;
  submitted = false;

  constructor(
    private service: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.route)
    const id = this.route.snapshot.params['id'];
    this.service.getOne(id).subscribe({
      next: (prod) => this.product = { ...prod as Iproduct }
    });
  }

  updateProduct(form: FormGroup) {
    this.service.update(this.product).subscribe({
      complete: () => {
        this.submitted = true;
        form.disable();
      }
    });
  }
}
