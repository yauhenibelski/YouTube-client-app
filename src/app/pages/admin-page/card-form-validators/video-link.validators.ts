import { ValidatorFn } from '@angular/forms';

const videoLinkValidators: Record<string, ValidatorFn> = {
    required: control => (control.value ? null : { required: 'Please enter a link to the video' }),
};

export const getVideoLinkValidators = () => Object.values(videoLinkValidators);
