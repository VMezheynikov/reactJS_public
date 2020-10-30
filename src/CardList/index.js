import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../Card/index';
import Checkbox from './Checkbox';

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
            },
            {
                id: 'card2',
                title: 'Card 2',
                text: 'card 2 text',
                editTitle: '',
                editText: '',
                editMode: false,
                cardStyle: {},
            },
            {
                id: 'card3',
                title: 'Card 3',
                text: 'card 3 text',
                editTitle: '',
                editText: '',
                editMode: false,
                cardStyle: {},
            },
            {
                id: 'card4',
                title: 'Card 4',
                text: 'card 4 text',
                editTitle: '',
                editText: '',
                editMode: false,
                cardStyle: {},
            },
            {
                id: 'card5',
                title: 'Card 5',
                text: 'card 5 text',
                editTitle: '',
                editText: '',
                editMode: false,
                cardStyle: {},
            },
            {
                id: 'card6',
                title: 'Card 6',
                text: 'card 6 text',
                editTitle: '',
                editText: '',
                editMode: false,
                cardStyle: {},
            },
            {
                id: 'card7',
                title: 'Card 7',
                text: 'card 7 text',
                editTitle: '',
                editText: '',
                editMode: false,
                cardStyle: {},
            },
            {
                id: 'card8',
                title: 'Card 8',
                text: 'card 8 text',
                editTitle: '',
                editText: '',
                editMode: false,
                cardStyle: {},
            },
            {
                id: 'card9',
                title: 'Card 9',
                text: 'card 9 text',
                editTitle: '',
                editText: '',
                editMode: false,
                cardStyle: {},
            },
            {
                id: 'card10',
                title: 'Card 10',
                text: 'card 10 text',
                editTitle: '',
                editText: '',
                editMode: false,
                cardStyle: {},
            },
        ],
        readOnly: false,
    };

    readonlyChangeHandler = (event) => {
        const mode = event != null && event.target.checked;
        const cards = this.state.cards.map((card) => ({
            ...card,
            editMode: false,
        }));
        this.setState({ cards: cards, readOnly: mode });
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
            } else {
                card.cardStyle = { color: 'green' };
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
                            readOnly={this.state.readOnly}
                            editMode={card.editMode}
                            cardStyle={card.cardStyle}
                            onSave={this.saveCardHandler(card.id)}
                            onEdit={this.editCardHandler(card.id)}
                            onUndo={this.undoCardHandler(card.id)}
                            onTitleChange={this.titleChangeHandler(card.id)}
                            onTextChange={this.textChangeHandler(card.id)}
                            onStyleChange={this.styleChangeHandler(card.id)}
                            key={card.id}>
                            {card.text}
                        </Card>
                    );
                })}
            </div>
        );

        return (
            <div>
                <div
                    style={{
                        position: 'relative',
                        left: '5px',
                        top: '5px',
                        width: '100px',
                    }}>
                    <label>
                        <Checkbox
                            checked={this.state.readOnly}
                            onClick={this.readonlyChangeHandler}
                        />
                        <b> {checkboxTitle}</b>
                    </label>
                </div>
                <hr />
                {cardList}
            </div>
        );
    }
}

export default CardList;
