import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iproduct } from 'src/app/shared/interfaces/iproduct';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  @Input()
  submitLabel:string = 'Apply';

  @Input()
  product = {} as Iproduct;

  @Input()
  submitted = false;

  @Output()
  onSubmit = new EventEmitter();
}
