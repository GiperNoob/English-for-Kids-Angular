import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  isRotate = false;

  @Input() word: string;
  @Input() translate: string;
  @Input() srcPath: string;

  rotateToggle(): void {
    console.log(1);

    this.isRotate = !this.isRotate;
  }
}
