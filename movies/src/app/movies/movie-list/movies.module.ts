import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './containers';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieListStoreModule } from './+store';
import { MovieCardModule } from '../resources/movie-card';
import { SharedModule } from 'src/app/shared';
import { SharedMoviesModule } from '../shared';

@NgModule({
  declarations: [MoviesComponent],
  imports: [CommonModule, MoviesRoutingModule, MovieListStoreModule, MovieCardModule, SharedModule, SharedMoviesModule]
})
export class MoviesModule {}
