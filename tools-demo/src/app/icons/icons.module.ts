import { NgModule } from '@angular/core';
import { IconsComponent } from './icons.component';
import { IconsRoutingModule } from './icons-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [IconsComponent],
  imports: [IconsRoutingModule, SharedModule],
})
export class IconsModule {}
