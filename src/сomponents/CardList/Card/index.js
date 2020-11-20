import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import withLoadingDelay from '../../../hoc/withLoadingDelay';

const Card = (props) => {
    return (
        <div>
            <CardHeader
                editMode={props.editMode}
                currentText={props.editTitle}
                cardId={props.cardId}>
                {props.title}
            </CardHeader>
            <hr />
            <CardBody
                editMode={props.editMode}
                currentText={props.editText}
                cardId={props.cardId}>
                {props.text}
            </CardBody>
        </div>
    );
};

Card.propTypes = {
    editMode: PropTypes.bool,
    editTitle: PropTypes.string,
    editText: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    cardId: PropTypes.string,
};

export default withLoadingDelay(Card, 'Card');
