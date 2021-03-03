import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassicComponentsComponent } from './classic-components.component';

const routes: Routes = [
  {
    path: '',
    component: ClassicComponentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassicComponentsRoutingModule { }
