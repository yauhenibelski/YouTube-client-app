import { ValidatorFn } from '@angular/forms';

const dateValidators: Record<string, ValidatorFn> = {
    maxDate: control => {
        return new Date(control.value).getTime() < Date.now()
            ? null
            : { maxLength: 'The date is invalid' };
    },
};

export const getDateValidators = () => Object.values(dateValidators);
