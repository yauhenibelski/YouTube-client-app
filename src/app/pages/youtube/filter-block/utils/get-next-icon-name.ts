import { IconName } from '../icon-name.const';

type Name = (typeof IconName)[keyof typeof IconName];

export const getNextIconName = (currentName: string | undefined): Name => {
    if (!currentName || currentName === IconName.empty) return IconName.arrowDown;
    if (currentName === IconName.arrowDown) return IconName.arrowUp;
    return IconName.empty;
};
