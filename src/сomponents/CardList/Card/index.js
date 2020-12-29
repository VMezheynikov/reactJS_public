import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Card.css';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import withLoadingDelay from '../../../hoc/withLoadingDelay';
import * as actionTypes from '../../../store/actions';

const Card = (props) => {
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
        props.onDeleteCard(props.cardId, event.target.checked);
    };

    const titleChangeHandler = (event) => {
        setEditTitle(event.target.value);
    };

    const textChangeHandler = (event) => {
        setEditText(event.target.value);
    };

    const saveCardHandler = (event) => {
        setEdited(false);
        props.onSave(props.cardId, editTitle, editText);
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
                onDoubleClick={props.onDoubleClick}
                onUndo={undoCardHandler}>
                {props.title}
            </CardHeader>
            <hr />
            <CardBody
                editMode={edited}
                currentText={editText}
                onTextChange={textChangeHandler}
                onDoubleClick={props.onDoubleClick}
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

const mapStateToProps = (state) => {
    return { ctxReadOnly: state.readOnly };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteCard: (id, checked) =>
            dispatch({
                type: actionTypes.MARK_REMOVE_CARD,
                cardId: id,
                state: checked,
            }),
        onSave: (id, title, text) =>
            dispatch({
                type: actionTypes.SAVE_CARD,
                cardId: id,
                title: title,
                text: text,
            }),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withLoadingDelay(Card, 'Card'));
