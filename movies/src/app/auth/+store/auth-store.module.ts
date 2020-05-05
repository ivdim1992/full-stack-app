import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as authReducer from './reducers';
import { authKey } from './reducers';
import { AuthEffects } from './effects';

@NgModule({
  imports: [StoreModule.forFeature(authKey, authReducer.reducer), EffectsModule.forFeature([AuthEffects])]
})
export class AuthStoreModule {}
