import React, { Component } from 'react';

const CardsContext = React.createContext();

class CardContextProvider extends Component {
    state = {
        cards: [
            {
                id: 'id1',
                headerText: 'Card 1',
                bodyText: 'I expect some text here...',
            },
            {
                id: 'id2',
                headerText: 'Card 2',
                bodyText: 'I expect some text here...',
            },
            {
                id: 'id3',
                headerText: 'Card 3',
                bodyText: 'I expect some text here...',
            },
            {
                id: 'id4',
                headerText: 'Card 4',
                bodyText: 'I expect some text here...',
            },
            {
                id: 'id5',
                headerText: 'Card 5',
                bodyText: 'I expect some text here...',
            },
            {
                id: 'id6',
                headerText: 'Card 6',
                bodyText: 'I expect some text here...',
            },
            {
                id: 'id7',
                headerText: 'Card 7',
                bodyText: 'I expect some text here...',
            },
            {
                id: 'id8',
                headerText: 'Card 8',
                bodyText: 'I expect some text here...',
            },
            {
                id: 'id9',
                headerText: 'Card 9',
                bodyText: 'I expect some text here...',
            },
            {
                id: 'id10',
                headerText: 'Card 10',
                bodyText: 'I expect some text here...',
            },
        ],
        readOnly: false,
    };

    cardsToRemove = [];

    checkBoxAppHandler = (event) => {
        const mode = event != null && event.target.checked;

        this.setState({ readOnly: mode });
    };

    addCardHandler = () => {
        let cards = [...this.state.cards];
        let lastCard = cards[cards.length - 1];
        let newCard = {
            id: 'id' + (+lastCard.id.slice(2) + 1),
            headerText: 'This is new Card',
            bodyText: 'I expect some text here...',
        };
        cards.push(newCard);
        this.setState({ cards: cards });
    };

    cardsToRemoveHandler = (id, state) => {
        if (state) {
            this.cardsToRemove.push(id);
        } else {
            this.cardsToRemove = this.cardsToRemove.filter((val) => val !== id);
        }
    };

    removeCardHandler = () => {
        let cards = [...this.state.cards];
        cards = cards.filter((val) => !this.cardsToRemove.includes(val.id));
        this.setState({ cards: cards });
    };

    saveCardHandler = (id, title, text) => {
        const cardIndex = this.state.cards.findIndex((c) => {
            return c.id === id;
        });
        const card = { ...this.state.cards[cardIndex] };
        card.headerText = title;
        card.bodyText = text;
        const cards = [...this.state.cards];
        cards[cardIndex] = card;

        this.setState({ cards: cards });
    };

    render() {
        return (
            <CardsContext.Provider
                value={{
                    readOnly: this.state.readOnly,
                    cards: this.state.cards,
                    cardsCount: this.state.cards.length,
                    onAdd: this.addCardHandler,
                    onRemove: this.removeCardHandler,
                    removeCard: this.cardsToRemoveHandler,
                    onChange: this.checkBoxAppHandler,
                    onSave: this.saveCardHandler,
                }}>
                {this.props.children}
            </CardsContext.Provider>
        );
    }
}

export { CardContextProvider, CardsContext };
