import { ValidatorFn } from '@angular/forms';

const imgValidators: Record<string, ValidatorFn> = {
    required: control => (control.value ? null : { required: 'Please enter a link to the image' }),
};

export const getImageValidators = () => Object.values(imgValidators);
