import React, { useContext } from 'react';
import CardsContext from '../context/cards-context';

const CardCounter = () => {
    const cardsContext = useContext(CardsContext);
    return (
        <button
            type="button"
            className="btn btn-primary"
            style={{
                position: 'absolute',
                right: '5px',
                top: '5px',
            }}>
            > Cards{' '}
            <span className="badge badge-light">
                {cardsContext.cards.length}
            </span>
        </button>
    );
};

export default CardCounter;
