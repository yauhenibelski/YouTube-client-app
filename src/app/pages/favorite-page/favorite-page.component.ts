import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ContentListComponent } from '@shared/components/content-list/content-list.component';
import { FavoriteVideoStore } from '../../store-signal/favorite-video.store';

@Component({
    selector: 'app-favorite-page',
    standalone: true,
    imports: [AsyncPipe, ContentListComponent],
    templateUrl: './favorite-page.component.html',
    styleUrl: './favorite-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritePageComponent {
    readonly favoriteList = inject(FavoriteVideoStore)['favorite-videoEntities'];
}
