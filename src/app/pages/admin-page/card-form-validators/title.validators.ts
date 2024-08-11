import { ValidatorFn } from '@angular/forms';
import { length } from '@shared/form-validators/length.validator';
import { required } from '@shared/form-validators/required.validator';

export const titleValidators: ValidatorFn[] = [
    required('Please enter a title'),
    length('min', 3, 'The title is too short'),
    length('max', 20, 'The title is too long'),
];
