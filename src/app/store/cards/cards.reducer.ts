import { createReducer, on } from '@ngrx/store';
import { cardsAdapter, cardsInitialState } from './cards.state';
import { CardsActions } from './cards.actions';

export const cardsReducer = createReducer(
    cardsInitialState,
    on(CardsActions.addCard, (state, card) => cardsAdapter.addOne(card, state)),
    on(CardsActions.deleteCard, (state, { id }) => cardsAdapter.removeOne(id, state)),
);
