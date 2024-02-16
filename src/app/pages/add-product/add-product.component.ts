import { ProductService } from 'src/app/services/product.service';
import { Iproduct } from '../../shared/interfaces/iproduct';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  subs: Subscription[] = [];
  product: Iproduct = {} as Iproduct;
  submitted = false;
  form?: FormGroup;

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.subs.push(this.service.getAll().subscribe({
      next: (data) => this.product = data as Iproduct
    }))
  }

  ngOnDestroy(): void {
    this.subs.map((sub) => sub.unsubscribe())
  }
  addProduct(form: FormGroup) {
    this.service.create({ ...this.product }).subscribe({
      complete: () => {
        this.form = form;
        this.submitted = true;
        this.form.disable();
      }
    })
  }

  resetForm() {
    this.form?.enable();
    this.form?.reset()
    this.submitted = false;
  }
}
