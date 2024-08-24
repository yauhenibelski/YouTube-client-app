import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FAVORITE_VIDEO_FEATURE, favoriteVideoAdapter, FavoriteVideoState } from './favorite.state';

const { selectAll, selectEntities } = favoriteVideoAdapter.getSelectors();

const favoriteVideoState = createFeatureSelector<FavoriteVideoState>(FAVORITE_VIDEO_FEATURE);

export const selectAllFavoriteVideo = createSelector(favoriteVideoState, state => selectAll(state));

export const selectFavoriteVideoEntities = createSelector(favoriteVideoState, state =>
    selectEntities(state),
);
