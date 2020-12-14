import React, { Component } from 'react';
import axious from 'axios';
import { v4 as uuidv4 } from 'uuid';

const CardsContext = React.createContext();

class CardContextProvider extends Component {
    state = {
        cards: [],
        readOnly: false,
        authorized: false,
    };

    cardsToRemove = [];

    componentDidMount() {
        axious
            .get(
                'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json',
            )
            .then((response) => {
                const cards = response.data.slice(0, 15).map((i) => {
                    return {
                        id: 'id' + uuidv4(),
                        headerText: i.Name,
                        bodyText: i.About,
                    };
                });
                this.setState({ cards: cards });
            });
    }

    checkBoxAppHandler = (event) => {
        const mode = event != null && event.target.checked;

        this.setState({ readOnly: mode });
    };

    addCardHandler = () => {
        let cards = [...this.state.cards];
        let newCard = {
            id: 'id' + uuidv4(),
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
                    authorized: this.state.authorized,
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
