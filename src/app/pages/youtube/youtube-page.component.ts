import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContentStoreService } from '@shared/services/content-store/content-store.service';
import { SwitchFilterBlockViewService } from '@shared/services/switch-filter-block-view/switch-filter-block-view.service';
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
    readonly contentList = this.contentStoreService.content;

    constructor(
        private readonly switchFilterBlockViewService: SwitchFilterBlockViewService,
        private readonly filterBlockService: FilterBlockService,
        private readonly contentStoreService: ContentStoreService,
    ) {}
}
