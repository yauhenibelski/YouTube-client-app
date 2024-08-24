import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CARDS_FEATURE, cardsAdapter, CardsState } from './cards.state';

const { selectAll } = cardsAdapter.getSelectors();

const cardsFeatureState = createFeatureSelector<CardsState>(CARDS_FEATURE);

export const selectCards = createSelector(cardsFeatureState, state => selectAll(state));
