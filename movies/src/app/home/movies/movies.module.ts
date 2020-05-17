import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './containers';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieListStoreModule } from './+store';

@NgModule({
  declarations: [MoviesComponent],
  imports: [CommonModule, MoviesRoutingModule, MovieListStoreModule]
})
export class MoviesModule {}
