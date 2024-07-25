import { Directive, HostBinding, Input } from '@angular/core';
import { getColorByDate } from './utils/get-color-by-date';

@Directive({
    selector: '[appPaintBorderBottom]',
    standalone: true,
})
export class PaintBorderBottomDirective {
    @HostBinding('style')
    @Input({
        required: true,
        transform: (publishedDate: string) => ({
            'border-bottom': 'solid 3px',
            'border-bottom-color': getColorByDate(publishedDate),
        }),
    })
    appPaintBorderBottom = 'none';
}
