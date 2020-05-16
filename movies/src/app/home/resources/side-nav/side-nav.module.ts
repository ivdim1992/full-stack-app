import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './components';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [SideNavComponent],
  imports: [CommonModule, MatIconModule, FlexLayoutModule],
  exports: [SideNavComponent]
})
export class SideNavModule {}
