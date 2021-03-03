import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassicComponentsComponent } from './classic-components.component';
import { ClassicComponentsRoutingModule } from './classic-components-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    ClassicComponentsComponent
  ],
  imports: [
    ClassicComponentsRoutingModule,
    SharedModule
  ]
})
export class ClassicComponentsModule { }
