import { inject } from '@angular/core';
import { CanActivateFn, RedirectCommand, Router } from '@angular/router';
import { AuthService } from '@shared/services/auth/auth.service';

export const isUnauthorizedGuard: CanActivateFn = () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.isAuthorized()) {
        const youtubePagePath = router.parseUrl('/youtube');

        return new RedirectCommand(youtubePagePath);
    }

    return true;
};
