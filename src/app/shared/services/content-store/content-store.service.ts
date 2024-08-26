import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Content, ContentList } from '@interface/content.interface';
import { map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ContentStoreService {
    constructor(private readonly httpClient: HttpClient) {}

    getContentById(contentId: string): Observable<Content | undefined> {
        return this.httpClient
            .get<ContentList>('videos', {
                params: {
                    part: ['snippet', 'statistics'],
                    id: contentId,
                },
            })
            .pipe(map(({ items }) => items.at(0)));
    }
}
