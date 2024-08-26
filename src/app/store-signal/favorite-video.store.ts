import { Content } from '@interface/content.interface';
import { patchState, signalStore, type, withMethods } from '@ngrx/signals';
import { addEntity, entityConfig, removeEntity, withEntities } from '@ngrx/signals/entities';

const config = entityConfig({
    entity: type<Content>(),
    collection: 'favorite-video',
});

export const FavoriteVideoStore = signalStore(
    { providedIn: 'root' },

    withEntities(config),

    withMethods(store => ({
        addToFavorite(content: Content) {
            patchState(store, addEntity(content, config));
        },
        removeFromFavorite(id: string) {
            patchState(store, removeEntity(id, config));
        },
    })),
);
