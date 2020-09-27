import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './containers';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieListStoreModule } from './+store';
import { SharedModule } from 'src/app/shared';
import { SharedMoviesModule } from '../shared';
import { MovieCardModule } from '../resources/movie-card';

@NgModule({
  declarations: [MoviesComponent],
  imports: [CommonModule, MoviesRoutingModule, MovieListStoreModule, SharedModule, SharedMoviesModule, MovieCardModule]
})
export class MoviesModule {}
