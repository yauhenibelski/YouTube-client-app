import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/auth/auth.service';

@Component({
    selector: 'app-auth-page',
    templateUrl: './auth-page.component.html',
    styleUrl: './auth-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPageComponent {
    readonly isAuthorized = this.authService.isAuthorized;

    isPasswordHide = true;

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly authService: AuthService,
        private readonly router: Router,
    ) {}

    readonly loginForm = this.formBuilder.nonNullable.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern(/^\S+$/)]],
    });

    handleLogin(): void {
        if (this.isAuthorized()) {
            this.authService.logout();

            return;
        }

        this.authService.login();

        this.router.navigateByUrl('/content-list');
    }
}
