import { ValidatorFn } from '@angular/forms';

export const required =
    (message?: string): ValidatorFn =>
    ({ value }) => {
        return value ? null : { required: message };
    };
