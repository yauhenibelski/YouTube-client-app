import { HttpClient } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { Content, ContentList, SearchList } from '@interface/content.interface';
import { concatMap, map, Observable, Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ContentStoreService {
    private readonly contentSignal = signal<Content[]>([]);

    readonly content = computed(this.contentSignal);

    private searchContentSubscription: Subscription | null = null;

    constructor(private readonly httpClient: HttpClient) {}

    loadSearchContent(searchParameter: string): void {
        if (this.searchContentSubscription) {
            this.searchContentSubscription.unsubscribe();
        }

        this.searchContentSubscription = this.httpClient
            .get<SearchList>('search', {
                params: {
                    type: 'video',
                    maxResults: 15,
                    q: searchParameter,
                },
            })
            .pipe(
                map(({ items }) => items.map(({ id }) => id.videoId)),
                concatMap(idArr => this.getContentById(idArr)),
            )
            .subscribe({
                next: content => {
                    this.contentSignal.set(content ?? []);
                },
                complete: () => {
                    this.searchContentSubscription = null;
                },
            });
    }

    getContentById(contentId: string | string[]): Observable<Content[] | undefined> {
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
