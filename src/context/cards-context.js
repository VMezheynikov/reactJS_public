import React from 'react';

const CardsContext = React.createContext({
    cards: [],
    readOnly: false,
    onEdit: (cardId) => () => {},
    onSave: (cardId) => () => {},
    onUndo: (cardId) => () => {},
    onTitleChange: (cardId) => () => {},
    onTextChange: (cardId) => () => {},
    onStyleChange: (cardId) => () => {},
});

export default CardsContext;
