import { IconName } from '../icon-name.const';

export const getNextIconName = (currentName: string | undefined): string => {
    if (!currentName || currentName === IconName.empty) return IconName.arrowDown;
    if (currentName === IconName.arrowDown) return IconName.arrowUp;
    return IconName.empty;
};
