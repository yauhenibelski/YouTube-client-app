import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContentListComponent } from './content-list/content-list.component';
import { HeaderComponent } from '../../core/header/header.component';
import { FilterBlockComponent } from '../../core/header/filter-block/filter-block.component';
import { openCloseFilterBlock } from './open-closed.animation';
import { ContentService } from '../../shared/services/content/content.service';
import { FilterContentPipe } from './pipes/filter-content/filter-content.pipe';
import { SortContentPipe } from './pipes/sort-content/sort-content.pipe';
import { SwitchFilterBlockViewService } from '../../shared/services/switch-filter-block-view/switch-filter-block-view.service';
import { FilterBlockService } from '../../core/header/filter-block/services/filter-block/filter-block.service';

@Component({
    selector: 'app-youtube-page',
    standalone: true,
    imports: [
        ContentListComponent,
        FilterBlockComponent,
        HeaderComponent,
        FilterContentPipe,
        SortContentPipe,
    ],
    templateUrl: './youtube-page.component.html',
    styleUrl: './youtube-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [openCloseFilterBlock],
})
export class YoutubePageComponent {
    readonly isShowFilterBlock = this.switchFilterBlockViewService.isShowFilterBlock;
    readonly filterOptions = this.filterBlockService.filterOptions;
    readonly sortOptions = this.filterBlockService.sortOptions;
    readonly contentList = this.contentService.content;

    constructor(
        private readonly switchFilterBlockViewService: SwitchFilterBlockViewService,
        private readonly filterBlockService: FilterBlockService,
        private readonly contentService: ContentService,
    ) {}
}
