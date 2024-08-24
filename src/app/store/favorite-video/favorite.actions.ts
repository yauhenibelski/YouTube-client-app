import { Content } from '@interface/content.interface';
import { createActionGroup, props } from '@ngrx/store';

export const FavoriteVideoActions = createActionGroup({
    source: 'Favorite video',
    events: {
        'Add to favorite': props<Content>(),
        'Remove from favorite': (id: string) => ({ id }),
    },
});
