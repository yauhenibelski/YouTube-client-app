import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ContentListComponent } from '@shared/components/content-list/content-list.component';
import { selectAllFavoriteVideo } from '@store/favorite-video/favorite.selectors';

@Component({
    selector: 'app-favorite-page',
    standalone: true,
    imports: [AsyncPipe, ContentListComponent],
    templateUrl: './favorite-page.component.html',
    styleUrl: './favorite-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritePageComponent {
    readonly favoriteList$ = this.store.pipe(select(selectAllFavoriteVideo));

    constructor(private readonly store: Store) {}
}
