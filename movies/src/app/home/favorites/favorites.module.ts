import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './containers';
import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoriteMoviesStoreModule } from './+store';
import { MovieCardModule } from '../resources/movie-card';

@NgModule({
  declarations: [FavoritesComponent],
  imports: [CommonModule, FavoritesRoutingModule, FavoriteMoviesStoreModule, MovieCardModule]
})
export class FavoritesModule {}
