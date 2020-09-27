import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './containers';
import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoriteMoviesStoreModule } from './+store';
import { SharedMoviesModule } from '../shared/shared-movies.module';
import { MovieCardModule } from '../resources/movie-card';

@NgModule({
  declarations: [FavoritesComponent],
  imports: [CommonModule, FavoritesRoutingModule, FavoriteMoviesStoreModule, SharedMoviesModule, MovieCardModule]
})
export class FavoritesModule {}
