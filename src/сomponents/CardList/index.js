import React, { Component } from 'react';
import { FaTrash } from 'react-icons/fa';
import { FaClone } from 'react-icons/fa';
import Card from './Card/index';
import Checkbox from './Checkbox';
import { CardsContext } from '../../context/CardsContext';
import CardCounter from '../CardCounter';

class CardList extends Component {
    render() {
        let checkboxTitle = 'Read only';

        let cardList = (
            <CardsContext.Consumer>
                {(context) => {
                    return (
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {context.cards.map((card, index) => {
                                return (
                                    <Card
                                        title={card.headerText}
                                        text={card.bodyText}
                                        saved={context.onSave}
                                        deleted={context.removeCard}
                                        key={card.id}
                                        cardId={card.id}>
                                        {card.bodyText}
                                    </Card>
                                );
                            })}
                        </div>
                    );
                }}
            </CardsContext.Consumer>
        );

        return (
            <div>
                <CardsContext.Consumer>
                    {(context) => {
                        return (
                            <div
                                style={{
                                    position: 'relative',
                                    left: '5px',
                                    top: '5px',
                                }}>
                                <label>
                                    <Checkbox
                                        defaultChecked={context.readOnly}
                                        onClick={context.onChange}
                                    />
                                    <b> {checkboxTitle} </b>
                                </label>
                                <label>
                                    <button
                                        className="btn"
                                        onClick={context.onRemove}>
                                        <FaTrash />
                                    </button>
                                    <b>Delete All Checked Cards </b>
                                </label>
                                <label>
                                    <button
                                        className="btn"
                                        onClick={context.onAdd}>
                                        <FaClone />
                                    </button>
                                    <b>Add New Card</b>
                                </label>
                                <CardCounter></CardCounter>
                            </div>
                        );
                    }}
                </CardsContext.Consumer>
                <hr />
                {cardList}
            </div>
        );
    }
}

export default CardList;
