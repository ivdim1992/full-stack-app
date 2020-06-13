import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { editMovieKey, reducer } from './reducers';
import { EditMovieEffects } from './effects';

@NgModule({
  imports: [StoreModule.forFeature(editMovieKey, reducer), EffectsModule.forFeature([EditMovieEffects])]
})
export class EditMovieStoreModule {}
