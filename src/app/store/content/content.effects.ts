import { inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { YoutubeApiService } from '@shared/services/youtube-api/youtube-api.service';
import { ContentActions } from './content.actions';

export const loadContentByWord = createEffect(
    (actions$ = inject(Actions), youtubeApiService = inject(YoutubeApiService)) => {
        return actions$.pipe(
            ofType(ContentActions.loadByKeyWord),
            switchMap(({ word }) => youtubeApiService.getContentByWord(word)),
            map(contentList => ContentActions.setAll(contentList)),
        );
    },
    {
        functional: true,
        dispatch: true,
    },
);

export const loadNextPageContent = createEffect(
    (actions$ = inject(Actions), youtubeApiService = inject(YoutubeApiService)) => {
        return actions$.pipe(
            ofType(ContentActions.loadNextPageContent),
            switchMap(() => youtubeApiService.getNextPageContent()),
            map(contentList => ContentActions.addContent(contentList)),
        );
    },
    {
        functional: true,
        dispatch: true,
    },
);
