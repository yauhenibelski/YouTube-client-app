import { Injectable, computed, signal } from '@angular/core';
import { Content } from '../../../interface/content.interface';
import { mockContent } from '../../content.mock';

@Injectable({
    providedIn: 'root',
})
export class ContentService {
    private readonly contentSignal = signal<Content[]>([]);

    readonly content = computed(this.contentSignal);

    loadContent(): void {
        this.contentSignal.set(mockContent.items);
    }
}
