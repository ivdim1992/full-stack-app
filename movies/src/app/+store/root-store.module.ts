import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ROOT_REDUCERS, metaReducers, routerStateKey } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomRouterSerializer } from './router-serializer/router-serializer';
import { AuthStoreModule } from '../auth/+store/auth-store.module';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictActionImmutability: false,
        strictStateImmutability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true
      }
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 15,
      name: 'MoviesStoreDevtools',
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: routerStateKey,
      serializer: CustomRouterSerializer
    }),
    AuthStoreModule
  ]
})
export class RootStoreModule {}
