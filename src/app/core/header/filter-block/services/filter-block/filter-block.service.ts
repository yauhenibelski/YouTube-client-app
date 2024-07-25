import { Injectable, computed, signal } from '@angular/core';
import { Filter } from '../../../../../interface/filter-options.interface';
import { getDirection } from '../../utils/get-direction';
import { getNextIconName } from '../../utils/get-next-icon-name';
import { Sort } from '../../../../../interface/sort-options.interface';

@Injectable({
    providedIn: 'root',
})
export class FilterBlockService {
    private readonly options = signal<Filter & Sort>({
        statisticType: '',
        direction: '',
        word: '',
    });

    readonly filterOptions = computed<Filter>(this.options);
    readonly sortOptions = computed<Sort>(this.options);

    setOptions(newOptions: Partial<Filter | Sort>): void {
        const newVal = { ...this.options(), ...newOptions };
        this.options.set(newVal);
    }

    showByDirection(fontIconName: string, sortBy: Sort['statisticType']): void {
        const nextIconName = getNextIconName(fontIconName);
        const direction = getDirection(nextIconName);

        this.setOptions({
            direction,
            statisticType: direction ? sortBy : '',
        });
    }

    showByWord(word: string): void {
        this.setOptions({ word });
    }
}
