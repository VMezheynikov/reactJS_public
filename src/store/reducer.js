import * as actionsTypes from './types.js';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    cards: [],
    readOnly: false,
    authorized: false,
    cardsIdToRemove: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.ADD_CARD:
            const newCard = {
                id: 'id' + uuidv4(),
                headerText: 'This is new Card',
                bodyText: 'I expect some text here...',
            };
            return { ...state, cards: state.cards.concat(newCard) };

        case actionsTypes.REMOVE_CARDS:
            return {
                ...state,
                cards: state.cards.filter(
                    (val) => !state.cardsIdToRemove.includes(val.id),
                ),
                cardsIdToRemove: [],
            };

        case actionsTypes.MARK_REMOVE_CARD:
            let cardsIdToRemove = [...state.cardsIdToRemove];
            if (action.state) {
                cardsIdToRemove = cardsIdToRemove.concat(action.cardId);
            } else {
                cardsIdToRemove = cardsIdToRemove.filter(
                    (val) => val !== action.cardId,
                );
            }

            return {
                ...state,
                cardsIdToRemove: cardsIdToRemove,
            };

        case actionsTypes.SAVE_CARD:
            const cardIndex = state.cards.findIndex((c) => {
                return c.id === action.cardId;
            });
            const card = { ...state.cards[cardIndex] };
            card.headerText = action.title;
            card.bodyText = action.text;
            const cards = [...state.cards];
            cards[cardIndex] = card;

            return { ...state, cards: cards };

        case actionsTypes.READONLY_CARD:
            return { ...state, readOnly: action.mode };

        case actionsTypes.INIT_CARDS:
            return { ...state, cards: [...action.cards] };
    }
    return state;
};

export default reducer;
