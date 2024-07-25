import { trigger, state, style, animate, transition } from '@angular/animations';

export const openCloseFilterBlock = trigger('openClose', [
    state(
        'open',
        style({
            height: '40px',
        }),
    ),
    state(
        'closed',
        style({
            height: '0px',
        }),
    ),
    transition('open => closed', [animate('0.2s')]),
    transition('closed => open', [animate('0.2s')]),
]);
