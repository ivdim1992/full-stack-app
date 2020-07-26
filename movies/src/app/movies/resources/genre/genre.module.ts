import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreComponent } from './containers';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [GenreComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [GenreComponent]
})
export class GenreModule {}
