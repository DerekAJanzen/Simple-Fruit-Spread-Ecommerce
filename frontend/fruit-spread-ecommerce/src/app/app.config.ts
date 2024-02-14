import { cartReducer } from './state/cart/cart.reducer';
import { JamEffects } from './state/jams/jam.effects';
import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore, provideState } from '@ngrx/store';
import { jamReducer } from './state/jams/jams.reducer';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore({ jams: jamReducer, cart: cartReducer}), provideState({ name: 'jams', reducer: jamReducer }),
   provideEffects(JamEffects), provideHttpClient(), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), provideAnimations()]
};
