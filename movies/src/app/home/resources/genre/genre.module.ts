import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreComponent } from './containers';

@NgModule({
  declarations: [GenreComponent],
  imports: [CommonModule],
  exports: [GenreComponent]
})
export class GenreModule {}
