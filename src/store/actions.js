import {
    ADD_CARD,
    REMOVE_CARDS,
    READONLY_CARD,
    MARK_REMOVE_CARD,
    SAVE_CARD,
    INIT_CARDS,
    LOGIN,
    LOGOUT,
} from './types';

export const onAddCard = () => ({
    type: ADD_CARD,
});

export const onDeleteMarkCards = () => ({
    type: REMOVE_CARDS,
});

export const onReadOnly = (mode) => ({
    type: READONLY_CARD,
    mode: mode,
});

export const onInitCards = (cards) => ({
    type: INIT_CARDS,
    cards: cards,
});

export const onDeleteCard = (id, checked) => ({
    type: MARK_REMOVE_CARD,
    cardId: id,
    state: checked,
});

export const onSaveCard = (id, title, text) => ({
    type: SAVE_CARD,
    cardId: id,
    title: title,
    text: text,
});

export const onLogin = (login, password) => ({
    type: LOGIN,
    login: login,
    password: password,
});

export const onLogout = () => ({
    type: LOGOUT,
});
