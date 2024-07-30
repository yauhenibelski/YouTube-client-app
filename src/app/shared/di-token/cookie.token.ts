import { InjectionToken } from '@angular/core';
import * as cookie from 'cookie';

export type Cookie = typeof cookie;

export const COOKIE = new InjectionToken<Cookie>('Cookie lib', {
    providedIn: 'root',
    factory: () => cookie,
});
