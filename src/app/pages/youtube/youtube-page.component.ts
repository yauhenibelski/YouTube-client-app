import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SwitchFilterBlockViewService } from '@shared/services/switch-filter-block-view/switch-filter-block-view.service';
import { Content } from '@interface/content.interface';
import { Card } from '@interface/card.interface';
import { openCloseFilterBlock } from './open-closed.animation';
import { FilterBlockService } from './filter-block/services/filter/filter.service';
import { ContentStore } from '../../store-signal/content-store';
import { CardStore } from '../../store-signal/cards-store';

@Component({
    selector: 'app-youtube-page',
    templateUrl: './youtube-page.component.html',
    styleUrl: './youtube-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [openCloseFilterBlock],
})
export class YoutubePageComponent {
    private readonly contentStore = inject(ContentStore);
    private readonly cardStore = inject(CardStore);

    readonly isShowFilterBlock = this.switchFilterBlockViewService.isShowFilterBlock;

    readonly filterOptions = this.filterBlockService.filterOptions;
    readonly sortOptions = this.filterBlockService.sortOptions;

    readonly contentList = this.contentStore.contentEntities;
    readonly cardList = this.cardStore.cardEntities;

    readonly contentCardMixture: (Card | Content)[] = [];

    readonly pageSize = 20;

    constructor(
        private readonly switchFilterBlockViewService: SwitchFilterBlockViewService,
        private readonly filterBlockService: FilterBlockService,
    ) {}

    loadContent() {
        this.contentStore.loadNextPageContent();
    }
}
