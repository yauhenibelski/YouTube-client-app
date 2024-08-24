import { Content } from '@interface/content.interface';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export const FAVORITE_VIDEO_FEATURE = 'favoriteVideo';

export type FavoriteVideoState = EntityState<Content>;

export const favoriteVideoAdapter = createEntityAdapter<Content>();

export const favoriteVideoInitialState = favoriteVideoAdapter.getInitialState();
