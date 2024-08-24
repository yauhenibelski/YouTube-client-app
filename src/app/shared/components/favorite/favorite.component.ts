import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-favorite',
    standalone: true,
    imports: [MatIconModule, MatButtonModule],
    templateUrl: './favorite.component.html',
    styleUrl: './favorite.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoriteComponent {
    isFavorite = input.required();

    toggle = output<boolean>();

    get iconName(): string {
        return this.isFavorite() ? 'favorite' : 'favorite_border';
    }
}
