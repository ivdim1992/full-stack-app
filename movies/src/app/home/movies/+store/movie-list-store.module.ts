import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { movieListKey, reducer } from './reducers';
import { MovieListEffects } from './effects';

@NgModule({
  imports: [StoreModule.forFeature(movieListKey, reducer), EffectsModule.forFeature([MovieListEffects])]
})
export class MovieListStoreModule {}
