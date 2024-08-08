import { NgModule } from '@angular/core';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { CardComponent } from './card/card.component';
import { FilterContentPipe } from './pipes/filter-content/filter-content.pipe';
import { YoutubePageComponent } from './youtube-page.component';
import { ContentListComponent } from './content-list/content-list.component';
import { SortContentPipe } from './pipes/sort-content/sort-content.pipe';
import { FilterBlockComponent } from './filter-block/filter-block.component';

@NgModule({
    declarations: [YoutubePageComponent],
    imports: [
        YoutubeRoutingModule,
        CardComponent,
        FilterContentPipe,
        ContentListComponent,
        FilterContentPipe,
        SortContentPipe,
        FilterBlockComponent,
    ],
    exports: [YoutubePageComponent],
})
export class YoutubeModule {}
