import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { Content } from '@interface/content.interface';
import { select, Store } from '@ngrx/store';
import { CustomButtonComponent } from '@shared/components/custom-button/custom-button.component';
import { FavoriteComponent } from '@shared/components/favorite/favorite.component';
import { StatisticsComponent } from '@shared/components/statistics/statistics.component';
import { PaintBorderBottomDirective } from '@shared/directives/paint-border-bottom/paint-border-bottom.directive';
import { FavoriteVideoActions } from '@store/favorite-video/favorite.actions';
import { selectFavoriteVideoEntities } from '@store/favorite-video/favorite.selectors';
import { MatTooltipModule } from '@angular/material/tooltip';
import { map } from 'rxjs';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [
        MatCardModule,
        StatisticsComponent,
        PaintBorderBottomDirective,
        CustomButtonComponent,
        RouterLink,
        FavoriteComponent,
        AsyncPipe,
        MatTooltipModule,
    ],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
    readonly content = input.required<Content>();

    readonly isFavorite$ = this.store.pipe(
        select(selectFavoriteVideoEntities),
        map(entities => Boolean(entities[this.content().id])),
    );

    constructor(private readonly store: Store) {}

    toggleFavorite(isFavorite: boolean): void {
        const { id } = this.content();

        return isFavorite
            ? this.store.dispatch(FavoriteVideoActions.addToFavorite(this.content()))
            : this.store.dispatch(FavoriteVideoActions.removeFromFavorite(id));
    }
}
