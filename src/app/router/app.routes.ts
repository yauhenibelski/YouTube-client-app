import { Routes } from '@angular/router';
import { isAuthorizedGuard } from './guard/isAuthorized/is-authorized.guard';
import { isUnauthorizedGuard } from './guard/is-unauthorized/is-unauthorized.guard';
import { isAdminGuard } from './guard/is-admin/is-admin.guard';

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
        path: 'admin',
        loadComponent: () =>
            import('@pages/admin-page/admin-page.component').then(
                ({ AdminPageComponent }) => AdminPageComponent,
            ),
        canMatch: [isAdminGuard],
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
