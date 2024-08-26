import { Card } from '@interface/card.interface';
import { patchState, signalStore, type, withMethods } from '@ngrx/signals';
import { addEntity, entityConfig, removeEntity, withEntities } from '@ngrx/signals/entities';

const config = entityConfig({
    entity: type<Card>(),
    collection: 'card',
});

export const CardStore = signalStore(
    { providedIn: 'root' },

    withEntities(config),

    withMethods(store => ({
        addCard(card: Card) {
            patchState(store, addEntity(card, config));
        },

        deleteCard(id: string) {
            patchState(store, removeEntity(id, config));
        },
    })),
);
