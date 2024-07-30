import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Statistics } from '@interface/content.interface';

@Component({
    selector: 'app-statistics',
    standalone: true,
    imports: [MatIconModule],
    templateUrl: './statistics.component.html',
    styleUrl: './statistics.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticsComponent {
    readonly statistics = input.required<Statistics>();
}
