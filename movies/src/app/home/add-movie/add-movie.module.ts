import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMovieComponent } from './containers';
import { AddMovieRoutingModule } from './add-movie-routing.module';

@NgModule({
  declarations: [AddMovieComponent],
  imports: [CommonModule, AddMovieRoutingModule]
})
export class AddMovieModule {}
