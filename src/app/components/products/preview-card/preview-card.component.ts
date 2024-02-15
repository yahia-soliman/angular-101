import { Component, Input } from '@angular/core';
import { Iproduct } from 'src/app/shared/interfaces/iproduct';

@Component({
  selector: 'app-preview-card',
  templateUrl: './preview-card.component.html',
  styleUrls: ['./preview-card.component.scss']
})
export class PreviewCardComponent {
  @Input()
  product = {} as Iproduct;
  imgErr = true;
}
