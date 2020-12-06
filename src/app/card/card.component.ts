import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  public isRotate = false;

  @Input() word: string;
  @Input() translate: string;
  @Input() srcPath: string;

  public rotateTrue(): void {
    this.isRotate = true;
  }

  public rotateFalse(): void {
    this.isRotate = false;
  }

  public mediaHandler(evt: { target: { localName: string; className: string; }; srcElement: { alt: string; } }): void {
    if (evt.target.localName === 'img' && evt.target.className === 'title-img') {
      const audio = new Audio(`../../assets/audio/${evt.srcElement.alt}.mp3`);
      audio.play();
    }
  }
}
