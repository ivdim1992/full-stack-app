import { NgModule } from '@angular/core';
import { SideNavComponent } from './components';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'src/app/shared';

@NgModule({
  declarations: [SideNavComponent],
  imports: [MatIconModule, SharedModule],
  exports: [SideNavComponent]
})
export class SideNavModule {}
