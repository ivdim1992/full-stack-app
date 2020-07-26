import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { createMovieKey, reducer } from './reducers';
import { CreateMovieEffects } from './effects';

@NgModule({
  imports: [StoreModule.forFeature(createMovieKey, reducer), EffectsModule.forFeature([CreateMovieEffects])]
})
export class CreateMovieStoreModule {}
