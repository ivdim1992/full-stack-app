import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { movieDetailsKey, reducer } from './reducers';
import { MovieDetailsEffects } from './effects';

@NgModule({
  imports: [StoreModule.forFeature(movieDetailsKey, reducer), EffectsModule.forFeature([MovieDetailsEffects])]
})
export class MovieDetailsStoreModule {}
