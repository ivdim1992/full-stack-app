import { NgModule } from '@angular/core';
import { SideNavComponent } from './components';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'src/app/shared';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SideNavComponent],
  imports: [MatIconModule, SharedModule],
  exports: [SideNavComponent]
})
export class SideNavModule {}
