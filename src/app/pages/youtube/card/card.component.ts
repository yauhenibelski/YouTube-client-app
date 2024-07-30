import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { Content } from '@interface/content.interface';
import { CustomButtonComponent } from '@shared/components/custom-button/custom-button.component';
import { StatisticsComponent } from '@shared/components/statistics/statistics.component';
import { PaintBorderBottomDirective } from '@shared/directives/paint-border-bottom/paint-border-bottom.directive';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [
        MatCardModule,
        StatisticsComponent,
        PaintBorderBottomDirective,
        CustomButtonComponent,
        RouterLink,
    ],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
    readonly content = input.required<Content>();
}
