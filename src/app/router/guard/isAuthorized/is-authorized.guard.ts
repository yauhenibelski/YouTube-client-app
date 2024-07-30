import { inject } from '@angular/core';
import { CanActivateFn, RedirectCommand, Router } from '@angular/router';
import { AuthService } from '@shared/services/auth/auth.service';

export const isAuthorizedGuard: CanActivateFn = () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (!authService.isAuthorized()) {
        const loginPath = router.parseUrl('/login');

        return new RedirectCommand(loginPath);
    }

    return true;
};
