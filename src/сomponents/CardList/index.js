import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { FaClone } from 'react-icons/fa';
import axious from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card/index';
import Checkbox from './Checkbox';
import CardCounter from '../CardCounter';
import * as actionTypes from '../../store/actions';

class CardList extends Component {
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
                this.props.onInitCards(cards);
            });
    }

    readOnlyHandler = (event) => {
        const mode = event != null && event.target.checked;
        this.props.onReadOnly(mode);
    };

    doubleClickHandler = (id) => {
        this.props.history.push({ pathname: '/card' + id });
    };

    render() {
        let checkboxTitle = 'Read only';

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
                        <Checkbox
                            defaultChecked={this.props.rdOnly}
                            onClick={this.readOnlyHandler}
                        />
                        <b> {checkboxTitle} </b>
                    </label>
                    <label>
                        <button
                            className="btn"
                            onClick={() => this.props.onDeleteMarkCards()}>
                            <FaTrash />
                        </button>
                        <b>Delete All Checked Cards </b>
                    </label>
                    <label>
                        <button className="btn" onClick={this.props.onAdd}>
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

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: () => dispatch({ type: actionTypes.ADD_CARD }),
        onDeleteMarkCards: () => dispatch({ type: actionTypes.REMOVE_CARDS }),
        onReadOnly: (mode) =>
            dispatch({ type: actionTypes.READONLY_CARD, mode: mode }),
        onInitCards: (cards) =>
            dispatch({ type: actionTypes.INIT_CARDS, cards: cards }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
