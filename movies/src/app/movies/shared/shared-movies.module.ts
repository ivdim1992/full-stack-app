import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoMoviesComponent } from './no-movies/no-movies.component';

@NgModule({
  declarations: [NoMoviesComponent],
  imports: [CommonModule],
  exports: [NoMoviesComponent]
})
export class SharedMoviesModule {}
