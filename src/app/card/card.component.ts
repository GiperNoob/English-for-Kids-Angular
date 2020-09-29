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

  rotateTrue(): void {
    this.isRotate = true;
  }

  rotateFalse(): void {
    this.isRotate = false;
  }

  mediaHandler(evt: any): void {
    if (evt.target.localName === 'img' && evt.target.className === 'title-img') {
      const audio = new Audio(`../../assets/audio/${evt.srcElement.alt}.mp3`);
      audio.play();
    }
  }
}
