import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Card from '../../сomponents/CardList/Card';

class CardPage extends Component {
    render() {
        const cardIndex = this.props.crds.findIndex((c) => {
            return c.id === this.props.match.params.id;
        });
        const card = this.props.crds[cardIndex];
        const context =
            card === undefined ? (
                <Redirect to="/Home" />
            ) : (
                <Card
                    title={card.headerText}
                    text={card.bodyText}
                    key={card.id}
                    cardId={card.id}>
                    {card.bodyText}
                </Card>
            );
        return context;
    }
}

const mapStateToProps = (state) => {
    return { crds: state.cards };
};

export default connect(mapStateToProps)(CardPage);
