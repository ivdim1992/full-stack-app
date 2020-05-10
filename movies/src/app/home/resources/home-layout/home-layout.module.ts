import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './components';

@NgModule({
  declarations: [HomeLayoutComponent],
  imports: [CommonModule],
  exports: [HomeLayoutComponent]
})
export class HomeLayoutModule {}
