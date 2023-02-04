import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-picture-Widget',
  templateUrl: './picture-Widget.component.html',
  styleUrls: ['./picture-Widget.component.scss']
})
export class PictureWidgetComponent {

  @Input() pictureSrc: string[] = [];


}
