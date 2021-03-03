import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Color } from '@shared/enum/colors.enum';
import { DemoItem } from '@shared/namespaces/demo-item.namespace';

@Component({
  selector: 'app-classic-components',
  templateUrl: 'classic-components.component.html',
  styleUrls: ['classic-components.component.scss'],
})
export class ClassicComponentsComponent {
  public readonly colorsList: Color[] = Object.values(Color).filter((value: Color) => value !== Color.white);
  public readonly inputsList: DemoItem.Input[] = this.colorsList.map((color: Color) => ({color, formControl: new FormControl('текст')}));
  public readonly buttonsList: DemoItem.Button[] = this.colorsList.map((color: Color) => ({color, text: 'Кнопка'}));
}
