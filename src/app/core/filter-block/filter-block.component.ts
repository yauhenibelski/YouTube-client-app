import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-filter-block',
    standalone: true,
    imports: [],
    templateUrl: './filter-block.component.html',
    styleUrl: './filter-block.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterBlockComponent {}
