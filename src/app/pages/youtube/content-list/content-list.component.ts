import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Content } from '../../../interface/content.interface';

@Component({
    selector: 'app-content-list',
    standalone: true,
    imports: [CardComponent],
    templateUrl: './content-list.component.html',
    styleUrl: './content-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentListComponent {
    readonly contentList = input.required<Content[]>();
}
