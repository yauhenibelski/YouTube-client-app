import { Card } from '@interface/card.interface';
import { createActionGroup, props } from '@ngrx/store';

export const CardsActions = createActionGroup({
    source: 'Cards',
    events: {
        'Add card': props<Card>(),
        'Delete card': (id: string) => ({ id }),
    },
});
