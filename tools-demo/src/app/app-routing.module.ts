import { NgModule, Type } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutes } from '@shared/enum/app-routes.enum';
import { ClassicComponentsModule } from './classic-components/classic-components.module';
import { IconsModule } from './icons/icons.module';

const routes: Routes = [
  {
    path: AppRoutes['classic-components'],
    loadChildren: (): Promise<Type<ClassicComponentsModule>> =>
      import('./classic-components/classic-components.module').then((module) => module.ClassicComponentsModule),
  },
  {
    path: AppRoutes.icons,
    loadChildren: (): Promise<Type<IconsModule>> =>
      import('./icons/icons.module').then((module) => module.IconsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
