import { NgModule } from '@angular/core';
import { HomeLayoutComponent } from './components';
import { SideNavModule } from '../side-nav';
import { SharedModule } from 'src/app/shared';
import { HeaderModule } from '../header';

@NgModule({
  declarations: [HomeLayoutComponent],
  imports: [SideNavModule, SharedModule, HeaderModule],
  exports: []
})
export class HomeLayoutModule {}
