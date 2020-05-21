import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './components';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [MovieCardComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [MovieCardComponent]
})
export class MovieCardModule {}
