import { Card } from '@interface/card.interface';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export const CARDS_FEATURE = 'cards';

export type CardsState = EntityState<Card>;

export const cardsAdapter = createEntityAdapter<Card>();

export const cardsInitialState = cardsAdapter.getInitialState();
