import { NgModule } from '@angular/core';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { FilterContentPipe } from './pipes/filter-content/filter-content.pipe';
import { YoutubePageComponent } from './youtube-page.component';
import { ContentListComponent } from '../../shared/components/content-list/content-list.component';
import { SortContentPipe } from './pipes/sort-content/sort-content.pipe';
import { CardComponent } from '../../shared/components/content-list/card/card.component';
import { FilterBlockComponent } from './filter-block/filter-block.component';

@NgModule({
    declarations: [YoutubePageComponent],
    imports: [
        CardComponent,
        YoutubeRoutingModule,
        FilterContentPipe,
        ContentListComponent,
        FilterContentPipe,
        SortContentPipe,
        FilterBlockComponent,
    ],
    exports: [YoutubePageComponent],
})
export class YoutubeModule {}
