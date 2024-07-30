import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
    PreloadAllModules,
    provideRouter,
    withHashLocation,
    withPreloading,
} from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from '@router/app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideAnimationsAsync(),
        provideRouter(routes, withPreloading(PreloadAllModules), withHashLocation()),
    ],
};
