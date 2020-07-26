import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditMovieComponent } from './containers/edit-movie/edit-movie.component';
import { EditMovieRoutingModule } from './edit-movie-routing.module';
import { EditMovieStoreModule } from './+store';
import { MovieFormModule } from '../resources/movie-form';

@NgModule({
  declarations: [EditMovieComponent],
  imports: [CommonModule, EditMovieRoutingModule, EditMovieStoreModule, MovieFormModule]
})
export class EditMovieModule {}
