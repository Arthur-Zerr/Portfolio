import { Component, Input } from '@angular/core';

@Component({
  selector: 'az-picture-Widget',
  templateUrl: './picture-Widget.component.html'
})
export class PictureWidgetComponent {

  @Input() pictureSrc: string[] = [];

  currentIndex: number = 0;

  getCurrentSrc(): string {
    return this.pictureSrc[this.currentIndex];
  }

  nextPicture(): void {
    const isLast = this.currentIndex === this.pictureSrc.length - 1;
    this.currentIndex = isLast ? 0 : this.currentIndex + 1;
  }

  previousPicture(): void {
    const isFirst = this.currentIndex === 0;
    this.currentIndex = isFirst ? this.pictureSrc.length - 1 : this.currentIndex - 1;
  }

  selectPicture(src: string): void {
    this.currentIndex = this.pictureSrc.indexOf(src);
  }
}
