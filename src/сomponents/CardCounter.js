import React, { Component } from 'react';
import { connect } from 'react-redux';

class CardCounter extends Component {
    render() {
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
                    {this.props.cardsCount}
                </span>
            </button>
        );
    }
}

const mapStateToProps = (state) => {
    return { cardsCount: state.cards.length };
};

export default connect(mapStateToProps)(CardCounter);
