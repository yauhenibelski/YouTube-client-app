import { BorderColor } from '../colors.const';

const MILLISECONDS_IN_DAY = 86400000;
const MILLISECONDS_IN_MONTH = 2.628e9;

export const getColorByDate = (publishedDate: string): keyof typeof BorderColor => {
    const difference = new Date().getTime() - new Date(publishedDate).getTime();

    const days = difference / MILLISECONDS_IN_DAY;
    const month = difference / MILLISECONDS_IN_MONTH;

    if (month > 6) return BorderColor.red;
    if (month > 1) return BorderColor.yellow;
    if (days < 7) return BorderColor.blue;

    return BorderColor.green;
};
