import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/auth/auth.service';
import { required } from '@shared/form-validators/required.validator';
import { passwordValidators } from './password.validator';

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
        email: ['', [required('Please enter a login email'), Validators.email]],
        password: ['', passwordValidators],
    });

    get errorEmailMessage(): string {
        const { email } = this.loginForm.controls;
        const errors = email.errors;

        if (email.hasError('email')) {
            return 'The login email is invalid';
        }

        return errors ? Object.values(errors).at(0) : '';
    }

    get errorPasswordMessage(): string {
        const { password } = this.loginForm.controls;
        const errors = password.errors;

        return errors ? Object.values(errors).at(0) : '';
    }

    handleLogin(): void {
        if (this.isAuthorized()) {
            this.authService.logout();

            return;
        }

        this.authService.login();

        this.router.navigateByUrl('/content-list');
    }
}
