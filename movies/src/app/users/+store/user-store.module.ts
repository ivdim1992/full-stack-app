import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { userKey, reducer } from './reducers';
import { UserEffects } from './effects';

@NgModule({
  imports: [StoreModule.forFeature(userKey, reducer), EffectsModule.forFeature([UserEffects])]
})
export class UserStoreModule {}
