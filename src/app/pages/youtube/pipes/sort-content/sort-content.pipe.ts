import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '@interface/content.interface';
import { Sort } from '@interface/sort-options.interface';

@Pipe({
    name: 'sortContent',
    standalone: true,
})
export class SortContentPipe implements PipeTransform {
    transform(content: Content[], { statisticType, direction }: Sort): Content[] {
        if (statisticType) {
            const sortByIncrease = (a: Content, b: Content) => {
                return statisticType === 'date'
                    ? Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt)
                    : Number(a.statistics.viewCount) - Number(b.statistics.viewCount);
            };

            const sortByDecrease = (a: Content, b: Content) => {
                return statisticType === 'date'
                    ? Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt)
                    : Number(b.statistics.viewCount) - Number(a.statistics.viewCount);
            };

            if (direction) {
                return direction === 'up'
                    ? [...content].sort(sortByDecrease)
                    : [...content].sort(sortByIncrease);
            }
        }

        return content;
    }
}
