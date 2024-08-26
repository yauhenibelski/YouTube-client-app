import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    computed,
    input,
    output,
} from '@angular/core';
import { Content } from '@interface/content.interface';
import { Card } from '@interface/card.interface';
import { IsCustomCardPipe } from '@shared/pipes/is-custom-card/is-custom-card.pipe';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { toChunk } from '@shared/utils/to-chunk';
import { CardComponent } from './card/card.component';
import { CustomCardComponent } from './custom-card/custom-card.component';

@Component({
    selector: 'app-content-list',
    standalone: true,
    imports: [CardComponent, IsCustomCardPipe, CustomCardComponent, MatPaginatorModule],
    templateUrl: './content-list.component.html',
    styleUrl: './content-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentListComponent {
    readonly contentList = input<(Content | Card)[]>([]);
    readonly pageSize = input<number>(20);
    readonly length = input<number>();

    readonly load = output<void>();

    readonly contentListChunks = computed(() => toChunk(this.contentList(), this.pageSize()));

    private pageIndex = 0;

    constructor(private readonly changeDetector: ChangeDetectorRef) {}

    handleSwitchEvent({ pageIndex }: PageEvent): void {
        this.pageIndex = pageIndex;

        this.changeDetector.markForCheck();

        this.loadMore();
    }

    private loadMore(): void {
        const isLastPage = this.contentListChunks().length === this.pageIndex + 1;

        if (isLastPage) {
            this.load.emit();
        }
    }

    get contentChunk() {
        return this.contentListChunks().at(this.pageIndex);
    }
}
