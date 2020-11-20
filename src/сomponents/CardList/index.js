import React, { Component } from 'react';
import { FaTrash } from 'react-icons/fa';
import { FaClone } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card/index';
import Checkbox from './Checkbox';
import CardsContext from '../../context/cards-context';
import CardCounter from '../CardCounter';

class CardList extends Component {
    state = {
        cards: [
            {
                id: 'card1',
                title: 'Card 1',
                text: 'card 1 text',
                editTitle: '',
                editText: '',
                editMode: false,
                cardStyle: {},
                checked: false,
            },
            {
                id: 'card2',
                title: 'Card 2',
                text: 'card 2 text',
                editTitle: '',
                editText: '',
                editMode: false,
                cardStyle: {},
                checked: false,
            },
            {
                id: 'card3',
                title: 'Card 3',
                text: 'card 3 text',
                editTitle: '',
                editText: '',
                editMode: false,
                cardStyle: {},
                checked: false,
            },
            {
                id: 'card4',
                title: 'Card 4',
                text: 'card 4 text',
                editTitle: '',
                editText: '',
                editMode: false,
                cardStyle: {},
                checked: false,
            },
            {
                id: 'card5',
                title: 'Card 5',
                text: 'card 5 text',
                editTitle: '',
                editText: '',
                editMode: false,
                cardStyle: {},
                checked: false,
            },
            {
                id: 'card6',
                title: 'Card 6',
                text: 'card 6 text',
                editTitle: '',
                editText: '',
                editMode: false,
                cardStyle: {},
                checked: false,
            },
            {
                id: 'card7',
                title: 'Card 7',
                text: 'card 7 text',
                editTitle: '',
                editText: '',
                editMode: false,
                cardStyle: {},
                checked: false,
            },
            {
                id: 'card8',
                title: 'Card 8',
                text: 'card 8 text',
                editTitle: '',
                editText: '',
                editMode: false,
                cardStyle: {},
                checked: false,
            },
            {
                id: 'card9',
                title: 'Card 9',
                text: 'card 9 text',
                editTitle: '',
                editText: '',
                editMode: false,
                cardStyle: {},
                checked: false,
            },
            {
                id: 'card10',
                title: 'Card 10',
                text: 'card 10 text',
                editTitle: '',
                editText: '',
                editMode: false,
                cardStyle: {},
                checked: false,
            },
        ],
        readOnly: false,
    };

    deleteCheckedCardsHandler = (event) => {
        const cards = this.state.cards.filter((card) => !card.checked);
        this.setState({ cards: cards });
    };

    readonlyChangeHandler = (event) => {
        const mode = event != null && event.target.checked;
        const cards = this.state.cards.map((card) => ({
            ...card,
            editMode: false,
        }));
        this.setState({ cards: cards, readOnly: mode });
    };

    addCardHandler = (event) => {
        const cards = [
            ...this.state.cards,
            {
                id: uuidv4(),
                title: '',
                text: '',
                editTitle: '',
                editText: '',
                editMode: false,
                cardStyle: {},
                checked: false,
            },
        ];
        this.setState({ cards: cards });
    };

    changeCard = (event, id, func) => {
        const cardIndex = this.state.cards.findIndex((c) => {
            return c.id === id;
        });
        const card = { ...this.state.cards[cardIndex] };
        func(card);
        const cards = [...this.state.cards];
        cards[cardIndex] = card;

        this.setState({ cards: cards });
    };

    saveCardHandler = (id) => (event) => {
        this.changeCard(event, id, (card) => {
            card.title = card.editTitle;
            card.text = card.editText;
            card.editMode = false;
        });
    };

    editCardHandler = (id) => (event) => {
        this.changeCard(event, id, (card) => {
            card.editTitle = card.title;
            card.editText = card.text;
            card.editMode = true;
            card.cardStyle = {};
        });
    };

    undoCardHandler = (id) => (event) => {
        this.changeCard(event, id, (card) => {
            card.editTitle = card.title;
            card.editText = card.text;
            card.editMode = false;
        });
    };

    titleChangeHandler = (id) => (event) => {
        this.changeCard(event, id, (card) => {
            card.editTitle = event.target.value;
        });
    };

    textChangeHandler = (id) => (event) => {
        this.changeCard(event, id, (card) => {
            card.editText = event.target.value;
        });
    };

    styleChangeHandler = (id) => (event) => {
        this.changeCard(event, id, (card) => {
            if (event != null && event.target.checked) {
                card.cardStyle = { color: 'red' };
                card.checked = true;
            } else {
                card.cardStyle = { color: 'green' };
                card.checked = false;
            }
        });
    };

    render() {
        let checkboxTitle = 'Read only';

        let cardList = (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {this.state.cards.map((card, index) => {
                    return (
                        <Card
                            title={card.title}
                            text={card.text}
                            editTitle={card.editTitle}
                            editText={card.editText}
                            editMode={card.editMode}
                            cardStyle={card.cardStyle}
                            key={card.id}
                            cardId={card.id}>
                            {card.text}
                        </Card>
                    );
                })}
            </div>
        );

        return (
            <CardsContext.Provider
                value={{
                    cards: this.state.cards,
                    readOnly: this.state.readOnly,
                    onEdit: this.editCardHandler,
                    onSave: this.saveCardHandler,
                    onUndo: this.undoCardHandler,
                    onTitleChange: this.titleChangeHandler,
                    onTextChange: this.textChangeHandler,
                    onStyleChange: this.styleChangeHandler,
                }}>
                <div>
                    <div
                        style={{
                            position: 'relative',
                            left: '5px',
                            top: '5px',
                        }}>
                        <label>
                            <Checkbox
                                defaultChecked={this.state.readOnly}
                                onClick={this.readonlyChangeHandler}
                            />
                            <b> {checkboxTitle} </b>
                        </label>
                        <label>
                            <button
                                className="btn"
                                onClick={this.deleteCheckedCardsHandler}>
                                <FaTrash />
                            </button>
                            <b>Delete All Checked Cards </b>
                        </label>
                        <label>
                            <button
                                className="btn"
                                onClick={this.addCardHandler}>
                                <FaClone />
                            </button>
                            <b>Add New Card</b>
                        </label>
                        <CardCounter></CardCounter>
                    </div>
                    <hr />
                    {cardList}
                </div>
            </CardsContext.Provider>
        );
    }
}

export default CardList;
