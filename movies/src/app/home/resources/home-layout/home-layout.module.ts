import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './components';
import { SideNavModule } from '../side-nav';
import { SharedModule } from 'src/app/shared';

@NgModule({
  declarations: [HomeLayoutComponent],
  imports: [CommonModule, SideNavModule, SharedModule],
  exports: [HomeLayoutComponent]
})
export class HomeLayoutModule {}
