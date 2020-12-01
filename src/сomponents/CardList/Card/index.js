import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import { CardsContext } from '../../../context/CardsContext';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import withLoadingDelay from '../../../hoc/withLoadingDelay';

const Card = (props) => {
    const cardContext = useContext(CardsContext);

    const [edited, setEdited] = useState(false);
    const [editText, setEditText] = useState(props.text);
    const [editTitle, setEditTitle] = useState(props.title);
    const [headerStyle, setHeaderStyle] = useState({ color: 'green' });

    const styleChangeHandler = (event) => {
        if (event.target.checked) {
            setHeaderStyle({ color: 'red' });
        } else {
            setHeaderStyle({ color: 'green' });
        }
        cardContext.removeCard(props.cardId, event.target.checked);
    };

    const titleChangeHandler = (event) => {
        setEditTitle(event.target.value);
    };

    const textChangeHandler = (event) => {
        setEditText(event.target.value);
    };

    const saveCardHandler = (event) => {
        setEdited(false);
        cardContext.onSave(props.cardId, editTitle, editText);
    };

    const editCardHandler = (event) => {
        setEdited(true);
        setEditTitle(props.title);
        setEditText(props.text);
    };

    const undoCardHandler = (event) => {
        setEdited(false);
    };

    return (
        <div className="CardHeader" style={headerStyle}>
            <CardHeader
                editMode={edited}
                currentText={editTitle}
                cardId={props.cardId}
                onEdit={editCardHandler}
                onSave={saveCardHandler}
                onTitleChange={titleChangeHandler}
                onStyleChange={styleChangeHandler}
                onUndo={undoCardHandler}>
                {props.title}
            </CardHeader>
            <hr />
            <CardBody
                editMode={edited}
                currentText={editText}
                onTextChange={textChangeHandler}
                cardId={props.cardId}>
                {props.text}
            </CardBody>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    cardId: PropTypes.string,
};

export default withLoadingDelay(Card, 'Card');
