import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '@interface/content.interface';
import { Filter } from '@interface/filter-options.interface';

@Pipe({
    name: 'filterContent',
    standalone: true,
})
export class FilterContentPipe implements PipeTransform {
    transform(content: Content[] | undefined, filter: Filter): Content[] {
        if (!content) {
            return [];
        }

        if (filter.word) {
            return content.filter(({ snippet }) =>
                snippet.title.toLowerCase().includes(filter.word.toLocaleLowerCase()),
            );
        }

        return content;
    }
}
