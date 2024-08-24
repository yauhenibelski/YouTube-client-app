import { ValidatorFn } from '@angular/forms';

const descriptionValidators: Record<string, ValidatorFn> = {
    maxLength: control => {
        return control.value.length > 255 ? { maxLength: 'The description is too long' } : null;
    },
};

export const getDescriptionValidators = () => Object.values(descriptionValidators);
