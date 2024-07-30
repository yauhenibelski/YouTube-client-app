import { Injectable, computed, signal } from '@angular/core';
import { Content } from '@interface/content.interface';
import { mockContent } from '@shared/content.mock';

@Injectable({
    providedIn: 'root',
})
export class ContentStoreService {
    private readonly contentSignal = signal<Content[]>([]);

    readonly content = computed(this.contentSignal);

    loadContent(): void {
        this.contentSignal.set(mockContent.items);
    }

    getContentById(contentId: string): Content | undefined {
        this.loadContent();

        return this.contentSignal().find(({ id }) => id === contentId);
    }
}
