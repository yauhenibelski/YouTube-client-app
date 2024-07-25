import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Content } from '../../../interface/content.interface';
import { StatisticsComponent } from './statistics/statistics.component';
import { PaintBorderBottomDirective } from './directives/paint-border-bottom/paint-border-bottom.directive';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [MatCardModule, StatisticsComponent, PaintBorderBottomDirective],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
    readonly content = input.required<Content>();
}
