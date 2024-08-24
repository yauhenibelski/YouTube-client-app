import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SwitchFilterBlockViewService } from '@shared/services/switch-filter-block-view/switch-filter-block-view.service';
import { select, Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { selectContent } from '@store/content/content.selectors';
import { selectCards } from '@store/cards/cards.selectors';
import { Content } from '@interface/content.interface';
import { Card } from '@interface/card.interface';
import { ContentActions } from '@store/content/content.actions';
import { openCloseFilterBlock } from './open-closed.animation';
import { FilterBlockService } from './filter-block/services/filter/filter.service';

@Component({
    selector: 'app-youtube-page',
    templateUrl: './youtube-page.component.html',
    styleUrl: './youtube-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [openCloseFilterBlock],
})
export class YoutubePageComponent {
    readonly isShowFilterBlock = this.switchFilterBlockViewService.isShowFilterBlock;

    readonly filterOptions = this.filterBlockService.filterOptions;
    readonly sortOptions = this.filterBlockService.sortOptions;

    readonly contentList = toSignal(this.store.pipe(select(selectContent)));
    readonly cardList = toSignal(this.store.pipe(select(selectCards)));

    readonly contentCardMixture: (Card | Content)[] = [];

    readonly pageSize = 20;

    constructor(
        private readonly switchFilterBlockViewService: SwitchFilterBlockViewService,
        private readonly filterBlockService: FilterBlockService,
        private readonly store: Store,
    ) {}

    loadContent() {
        this.store.dispatch(ContentActions.loadNextPageContent());
    }
}
