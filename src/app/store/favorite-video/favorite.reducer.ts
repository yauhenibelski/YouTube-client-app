import { createReducer, on } from '@ngrx/store';
import { favoriteVideoAdapter, favoriteVideoInitialState } from './favorite.state';
import { FavoriteVideoActions } from './favorite.actions';

export const favoriteVideoReducer = createReducer(
    favoriteVideoInitialState,
    on(FavoriteVideoActions.addToFavorite, (state, content) =>
        favoriteVideoAdapter.addOne(content, state),
    ),
    on(FavoriteVideoActions.removeFromFavorite, (state, { id }) =>
        favoriteVideoAdapter.removeOne(id, state),
    ),
);
