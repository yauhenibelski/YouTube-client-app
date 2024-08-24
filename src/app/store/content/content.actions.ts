import { Content } from '@interface/content.interface';
import { createActionGroup, emptyProps } from '@ngrx/store';

export const ContentActions = createActionGroup({
    source: 'Content',
    events: {
        'Load by key word': (word: string) => ({ word }),
        'Set all': (content: Content[]) => ({ content }),
        'Add content': (content: Content[]) => ({ content }),
        'Load next page Content': emptyProps(),
    },
});
