import { Routes } from '@angular/router';
import { isAuthorizedGuard } from './guard/isAuthorized/is-authorized.guard';
import { isUnauthorizedGuard } from './guard/is-unauthorized/is-unauthorized.guard';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('@pages/auth-page/auth.module').then(m => m.AuthModule),
        canActivate: [isUnauthorizedGuard],
    },
    {
        path: 'content-list',
        loadChildren: () => import('@pages/youtube/youtube.module').then(m => m.YoutubeModule),
        canActivate: [isAuthorizedGuard],
    },
    {
        path: 'detailed',
        loadChildren: () =>
            import('@pages/detailed-page/detailed.module').then(m => m.DetailedModule),
        canActivate: [isAuthorizedGuard],
    },
    {
        path: 'not-found',
        loadComponent: () =>
            import('@pages/not-found/not-found.component').then(m => m.NotFoundComponent),
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/content-list',
    },
    {
        path: '**',
        redirectTo: 'not-found',
    },
];
