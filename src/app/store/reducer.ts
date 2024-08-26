import { cardsReducer } from './cards/cards.reducer';
import { CARDS_FEATURE } from './cards/cards.state';
import { contentReducer } from './content/content.reducer';
import { CONTENT_FEATURE } from './content/content.state';
import { favoriteVideoReducer } from './favorite-video/favorite.reducer';
import { FAVORITE_VIDEO_FEATURE } from './favorite-video/favorite.state';

export const storeReducer = {
    [CONTENT_FEATURE]: contentReducer,
    [CARDS_FEATURE]: cardsReducer,
    [FAVORITE_VIDEO_FEATURE]: favoriteVideoReducer,
} as const;
