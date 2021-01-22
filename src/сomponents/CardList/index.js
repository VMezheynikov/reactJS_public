import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { FaClone } from 'react-icons/fa';
import axious from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card/index';
import CardCounter from '../CardCounter';
import { onAddCard, onDeleteMarkCards, onInitCards } from '../../store/actions';

class CardList extends Component {
    componentDidMount() {
        if (!(this.props.crds.length > 0))
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
                    this.props.onInitCards(cards);
                });
    }

    doubleClickHandler = (id) => {
        this.props.history.push({ pathname: '/card' + id });
    };

    render() {
        let cardList = (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {this.props.crds.map((card, index) => {
                    return (
                        <Card
                            title={card.headerText}
                            text={card.bodyText}
                            key={card.id}
                            cardId={card.id}
                            onDoubleClick={() =>
                                this.doubleClickHandler(card.id)
                            }>
                            {card.bodyText}
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
                    }}>
                    <label>
                        <button
                            className="btn"
                            onClick={() => this.props.onDeleteMarkCards()}>
                            <FaTrash />
                        </button>
                        <b>Delete All Checked Cards </b>
                    </label>
                    <label>
                        <button className="btn" onClick={this.props.onAddCard}>
                            <FaClone />
                        </button>
                        <b>Add New Card</b>
                    </label>
                    <CardCounter></CardCounter>
                </div>
                <hr />
                {cardList}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { crds: state.cards, rdOnly: state.readOnly };
};

const mapDispatchToProps = {
    onAddCard,
    onDeleteMarkCards,
    onInitCards,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
