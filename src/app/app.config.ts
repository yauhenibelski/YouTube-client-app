import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
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

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideAnimationsAsync(),
        provideHttpClient(withInterceptors([setBaseUrlInterceptor, setAccessKeyInterceptor])),
        provideRouter(routes, withPreloading(PreloadAllModules), withHashLocation()),
    ],
};
