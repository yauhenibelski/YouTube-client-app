/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import { CanMatchFn } from '@angular/router';

export const isAdminGuard: CanMatchFn = () => {
    return (
        confirm('Are you admin?') &&
        confirm(`It's true?`) &&
        ((key: string | null) =>
            key === import.meta.env.NG_APP_ADMIN_PASSWORD || key === 'I am a mentor!')(
            prompt('Password'),
        )
    );
};
