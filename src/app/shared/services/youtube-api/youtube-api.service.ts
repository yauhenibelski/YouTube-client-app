import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { Content, ContentList, SearchList } from '@interface/content.interface';
import { concatMap, map, Observable, tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class YoutubeApiService {
    constructor(private readonly httpClient: HttpClient) {}

    private readonly pageInfoSignal = signal<Pick<SearchList, 'nextPageToken' | 'pageInfo'> | null>(
        null,
    );

    readonly pageInfo = computed(this.pageInfoSignal);

    private readonly contentRequestParams = {
        part: 'snippet',
        type: 'video',
        maxResults: 40,
    };

    getContentByWord(searchParameter: string): Observable<Content[]> {
        return this.httpClient
            .get<SearchList>('search', {
                params: {
                    ...this.contentRequestParams,
                    q: searchParameter,
                },
            })
            .pipe(
                tap(({ nextPageToken, pageInfo }) => {
                    this.pageInfoSignal.set({ nextPageToken, pageInfo });
                }),
                map(({ items }) => items.map(({ id }) => id.videoId)),
                concatMap(idArr => this.getContentById(idArr)),
            );
    }

    getNextPageContent(): Observable<Content[]> {
        return this.httpClient
            .get<SearchList>('search', {
                params: {
                    ...this.contentRequestParams,
                    pageToken: `${this.pageInfo()?.nextPageToken}`,
                },
            })
            .pipe(
                tap(({ nextPageToken, pageInfo }) => {
                    this.pageInfoSignal.set({ nextPageToken, pageInfo });
                }),
                map(({ items }) => items.map(({ id }) => id.videoId)),
                concatMap(idArr => this.getContentById(idArr)),
            );
    }

    getContentById(contentId: string | string[]): Observable<Content[]> {
        return this.httpClient
            .get<ContentList>('videos', {
                params: {
                    part: ['snippet', 'statistics'],
                    id: contentId,
                },
            })
            .pipe(map(({ items }) => items));
    }
}
