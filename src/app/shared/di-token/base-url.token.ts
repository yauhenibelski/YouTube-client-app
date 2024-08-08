import { InjectionToken } from '@angular/core';

export const BASE_URL = new InjectionToken('YouTube Url request', {
    providedIn: 'root',
    factory: () => 'https://www.googleapis.com/youtube/v3/',
});
