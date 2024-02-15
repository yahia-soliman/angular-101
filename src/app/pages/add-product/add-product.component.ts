import { ProductService } from 'src/app/services/product.service';
import { Iproduct } from '../../shared/interfaces/iproduct';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  product: Iproduct = {} as Iproduct;
  submitted= false;
  form?: FormGroup;

  constructor(private service: ProductService) { }

  addProduct(form: FormGroup) {
    this.service.create({...this.product});
    this.submitted= true;
    form.disable();
    this.form = form;
  }

  resetForm() {
    this.form?.enable();
    this.form?.reset()
    this.submitted= false;
  }
}
