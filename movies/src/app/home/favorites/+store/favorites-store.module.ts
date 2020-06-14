import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { favoriteMoviesKey, reducer } from './reducers';
import { FavoriteMoviesEffects } from './effects';

@NgModule({
  imports: [StoreModule.forFeature(favoriteMoviesKey, reducer), EffectsModule.forFeature([FavoriteMoviesEffects])]
})
export class FavoriteMoviesStoreModule {}
