import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './components';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [MovieCardComponent],
  imports: [CommonModule, FlexLayoutModule, MatButtonModule, MatIconModule],
  exports: [MovieCardComponent]
})
export class MovieCardModule {}
