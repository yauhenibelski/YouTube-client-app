import { Inject, Injectable, computed, signal } from '@angular/core';
import { COOKIE, Cookie } from '@shared/di-token/cookie.token';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private readonly isAuthorizedSignal = signal<boolean>(this.hasAccessToken);

    readonly isAuthorized = computed(this.isAuthorizedSignal);

    constructor(@Inject(COOKIE) private readonly cookie: Cookie) {}

    get hasAccessToken(): boolean {
        return !!this.cookie.parse(document.cookie)['accessToken'];
    }

    login(): void {
        const mockAccessToken = this.cookie.serialize(
            'accessToken',
            Math.random().toString(16).slice(2),
        );

        document.cookie = mockAccessToken;

        this.isAuthorizedSignal.set(true);
    }

    logout(): void {
        const cookie = this.cookie.parse(document.cookie);

        if (cookie['accessToken']) {
            document.cookie = this.cookie.serialize('accessToken', cookie['accessToken'], {
                maxAge: 0,
            });
        }

        this.isAuthorizedSignal.set(false);
    }
}
