import { ValidatorFn } from '@angular/forms';
import { length } from '@shared/form-validators/length.validator';
import { required } from '@shared/form-validators/required.validator';

export const passwordValidators: ValidatorFn[] = [
    required('Please enter a password'),
    length('min', 8, 'At least 8 characters'),
    ({ value }) => {
        return value.match(/[a-z]/) && value.match(/[A-Z]/)
            ? null
            : {
                  hasMixtureLetters:
                      'There should be a mixture of both uppercase and lowercase letters',
              };
    },

    ({ value }) => {
        return value.match(/[0-9]/)
            ? null
            : { hasNumber: 'There should be a mixture of letters and numbers' };
    },

    ({ value }) => {
        return value.match(/\W/)
            ? null
            : {
                  hasSpecialCharacter:
                      'There should be at least one special character, e.g., ! @ # ? ]',
              };
    },
];
