import { Sort } from '../../../../interface/sort-options.interface';
import { IconName } from '../icon-name.const';

export const getDirection = (iconName: string): Sort['direction'] => {
    if (iconName === IconName.arrowDown) return 'down';
    if (iconName === IconName.arrowUp) return 'up';
    return '';
};
