import { Component } from '@angular/core';
import { AppRoutes } from '@shared/enum/app-routes.enum';

interface CustomComponent {
  routerLink: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public readonly componentsList: CustomComponent[] = [
    {
      routerLink: `./${AppRoutes['classic-components']}`,
      text: 'Классические компоненты'
    },{
      routerLink: `./${AppRoutes.icons}`,
      text: 'Иконки'
    }
  ];
}
