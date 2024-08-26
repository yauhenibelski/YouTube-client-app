import { inject } from '@angular/core';
import { Content } from '@interface/content.interface';
import { patchState, signalStore, type, withMethods } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { addEntities, entityConfig, setAllEntities, withEntities } from '@ngrx/signals/entities';
import { pipe, switchMap, tap } from 'rxjs';
import { YoutubeApiService } from '@shared/services/youtube-api/youtube-api.service';

const config = entityConfig({
    entity: type<Content>(),
    collection: 'content',
});

export const ContentStore = signalStore(
    { providedIn: 'root' },
    withEntities(config),

    withMethods((store, youtubeApiService = inject(YoutubeApiService)) => ({
        loadContentByWord: rxMethod<string>(
            pipe(
                switchMap(word => youtubeApiService.getContentByWord(word)),
                tap(items => patchState(store, setAllEntities(items, config))),
            ),
        ),

        loadNextPageContent: rxMethod<void>(
            pipe(
                switchMap(() => youtubeApiService.getNextPageContent()),
                tap(items => patchState(store, addEntities(items, config))),
            ),
        ),
    })),
);
