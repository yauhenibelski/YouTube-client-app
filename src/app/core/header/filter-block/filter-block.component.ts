/* eslint-disable no-param-reassign */
import { ChangeDetectionStrategy, Component, DestroyRef, viewChildren } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs';
import { FilterBlockService } from './services/filter-block/filter-block.service';
import { IconName } from './icon-name.const';
import { getNextIconName } from './utils/get-next-icon-name';
import { Sort } from '../../../interface/sort-options.interface';

@Component({
    selector: 'app-filter-block',
    standalone: true,
    imports: [MatButtonModule, MatIconModule, ReactiveFormsModule],
    templateUrl: './filter-block.component.html',
    styleUrl: './filter-block.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterBlockComponent {
    readonly icons = viewChildren(MatIcon);
    readonly filterByWord = new FormControl<string>('', { nonNullable: true });

    constructor(
        public readonly filterService: FilterBlockService,
        destroyRef: DestroyRef,
    ) {
        this.filterByWord.valueChanges
            .pipe(takeUntilDestroyed(destroyRef), debounceTime(500))
            .subscribe(value => this.filterService.showByWord(value));
    }

    sortByStatisticType(currentIcon: MatIcon, sortBy: Sort['statisticType']): void {
        this.filterService.showByDirection(currentIcon.fontIcon, sortBy);
        this.changeIconDirection(currentIcon);
    }

    private changeIconDirection(currentIcon: MatIcon): void {
        currentIcon.fontIcon = getNextIconName(currentIcon.fontIcon);

        this.icons().forEach(icon => {
            if (icon !== currentIcon) icon.fontIcon = IconName.empty;
        });
    }
}
