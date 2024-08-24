import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import {
    PreloadAllModules,
    provideRouter,
    withHashLocation,
    withPreloading,
} from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from '@router/app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { setBaseUrlInterceptor } from '@core/interceptors/set-base-url/set-base-url.interceptor';
import { setAccessKeyInterceptor } from '@core/interceptors/set-access-key/set-access-key.interceptor';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { storeReducer } from '@store/reducer';
import { storeEffects } from '@store/effects';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideAnimationsAsync(),
        provideHttpClient(withInterceptors([setBaseUrlInterceptor, setAccessKeyInterceptor])),
        provideRouter(routes, withPreloading(PreloadAllModules), withHashLocation()),
        provideStore(storeReducer),
        provideEffects(storeEffects),
        provideStoreDevtools({ logOnly: !isDevMode() }),
    ],
};
