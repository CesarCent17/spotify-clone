import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square-card',
  templateUrl: './square-card.component.html',
  styleUrls: ['./square-card.component.scss']
})
export class SquareCardComponent {
  @Input() img: string = '';
  @Input() title: string = '';
  @Input() detail: string = '';
  @Input() circular: boolean = false;
}
