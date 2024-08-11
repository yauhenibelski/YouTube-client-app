import { ValidatorFn } from '@angular/forms';

export const maxDate =
    (message?: string): ValidatorFn =>
    ({ value }) => {
        return new Date(value).getTime() < Date.now() ? null : { required: message };
    };
