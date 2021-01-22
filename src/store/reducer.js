import * as actionsTypes from './types.js';
import { v4 as uuidv4 } from 'uuid';

const sReadOnly = 'testAppReadOnly';
const sUsername = 'testAppUserName';
const sIsLogin = 'testAppIsLogin';
const sIsAdmin = 'testAppIsAdmin';

const initialState = {
    cards: [],
    readOnly: sessionStorage.getItem(sReadOnly)
        ? sessionStorage.getItem(sReadOnly).toLowerCase() === 'true'
        : false,
    authorized: false,
    cardsIdToRemove: [],
    username: sessionStorage.getItem(sUsername)
        ? sessionStorage.getItem(sUsername)
        : '',
    isLogin: sessionStorage.getItem(sIsLogin)
        ? sessionStorage.getItem(sIsLogin).toLowerCase() === 'true'
        : false,
    isAdmin: sessionStorage.getItem(sIsAdmin)
        ? sessionStorage.getItem(sIsAdmin).toLowerCase() === 'true'
        : false,
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
            sessionStorage.setItem(sReadOnly, action.mode);
            return { ...state, readOnly: action.mode };

        case actionsTypes.INIT_CARDS:
            return { ...state, cards: [...action.cards] };
        case actionsTypes.LOGIN:
            const admin =
                action.login === 'testAdmin@gmail.com' &&
                action.password === '12345yuiopp';
            sessionStorage.setItem(sIsLogin, true);
            sessionStorage.setItem(sUsername, action.login);
            sessionStorage.setItem(sIsAdmin, admin);
            return {
                ...state,
                username: action.login,
                isLogin: true,
                isAdmin: admin,
            };
        case actionsTypes.LOGOUT:
            sessionStorage.removeItem(sIsLogin);
            sessionStorage.removeItem(sUsername);
            sessionStorage.removeItem(sIsAdmin);
            return {
                ...state,
                username: '',
                isLogin: false,
                isAdmin: false,
            };
        default:
            return state;
    }
};

export default reducer;
