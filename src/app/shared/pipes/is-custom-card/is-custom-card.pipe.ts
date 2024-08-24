import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '@interface/card.interface';
import { isCard } from '../../../type-guards/is-card.type-guard';

@Pipe({
    name: 'isCustomCard',
    standalone: true,
})
export class IsCustomCardPipe implements PipeTransform {
    transform(value: unknown): value is Card {
        return isCard(value);
    }
}
