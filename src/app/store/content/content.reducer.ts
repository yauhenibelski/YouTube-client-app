import { createReducer, on } from '@ngrx/store';
import { ContentActions } from './content.actions';
import { contentAdapter, contentInitialState } from './content.state';

export const contentReducer = createReducer(
    contentInitialState,
    on(ContentActions.setAll, (state, { content }) => contentAdapter.setAll(content, state)),
    on(ContentActions.addContent, (state, { content }) => contentAdapter.setMany(content, state)),
);
