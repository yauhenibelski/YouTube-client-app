import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { Content } from '@interface/content.interface';
import { CustomButtonComponent } from '@shared/components/custom-button/custom-button.component';
import { FavoriteComponent } from '@shared/components/favorite/favorite.component';
import { StatisticsComponent } from '@shared/components/statistics/statistics.component';
import { PaintBorderBottomDirective } from '@shared/directives/paint-border-bottom/paint-border-bottom.directive';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FavoriteVideoStore } from '../../../../store-signal/favorite-video.store';

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
    private readonly favoriteVideoStore = inject(FavoriteVideoStore);

    readonly content = input.required<Content>();

    readonly isFavoriteSignal = computed(() => {
        const entities = this.favoriteVideoStore['favorite-videoEntityMap']();
        return Boolean(entities[this.content().id]);
    });

    toggleFavorite(isFavorite: boolean): void {
        const { id } = this.content();

        return isFavorite
            ? this.favoriteVideoStore.addToFavorite(this.content())
            : this.favoriteVideoStore.removeFromFavorite(id);
    }
}
