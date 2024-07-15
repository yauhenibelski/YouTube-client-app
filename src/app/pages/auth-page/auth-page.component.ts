import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-auth-page',
    standalone: true,
    imports: [],
    templateUrl: './auth-page.component.html',
    styleUrl: './auth-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPageComponent {}
