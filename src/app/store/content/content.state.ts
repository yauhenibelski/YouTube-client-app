import { Content } from '@interface/content.interface';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

export const CONTENT_FEATURE = 'content';

export type ContentState = EntityState<Content>;

export const contentAdapter = createEntityAdapter<Content>();

export const contentInitialState = contentAdapter.getInitialState();
