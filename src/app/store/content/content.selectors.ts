import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CONTENT_FEATURE, contentAdapter, ContentState } from './content.state';

const { selectAll } = contentAdapter.getSelectors();

const contentFeatureState = createFeatureSelector<ContentState>(CONTENT_FEATURE);

export const selectContent = createSelector(contentFeatureState, state => selectAll(state));
