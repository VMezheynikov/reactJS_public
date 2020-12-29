import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../сomponents/CardList/Card';
import * as actionTypes from '../../store/actions';

class CardPage extends Component {
    render() {
        const cardIndex = this.props.crds.findIndex((c) => {
            return c.id === this.props.match.params.id;
        });
        const card = this.props.crds[cardIndex];
        return (
            <Card
                title={card.headerText}
                text={card.bodyText}
                key={card.id}
                cardId={card.id}>
                {card.bodyText}
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return { crds: state.cards };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSave: (id, title, text) =>
            dispatch({
                type: actionTypes.SAVE_CARD,
                cardId: id,
                title: title,
                text: text,
            }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardPage);
