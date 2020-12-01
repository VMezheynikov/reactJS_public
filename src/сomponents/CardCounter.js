import React from 'react';
import { CardsContext } from '../context/CardsContext';

const CardCounter = () => {
    return (
        <CardsContext.Consumer>
            {(context) => {
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
                            {context.cardsCount}
                        </span>
                    </button>
                );
            }}
        </CardsContext.Consumer>
    );
};

export default CardCounter;
