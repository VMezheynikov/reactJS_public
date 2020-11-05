import React from 'react';
import './Card.css';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

const Card = (props) => {
    return (
        <div className="Card" style={props.cardStyle}>
            <div>
                <CardHeader
                    editMode={props.editMode}
                    readOnly={props.readOnly}
                    edited={props.onEdit}
                    changed={props.onTitleChange}
                    currentText={props.editTitle}
                    undoClick={props.onUndo}
                    saveClick={props.onSave}
                    styleChanged={props.onStyleChange}>
                    {props.title}
                </CardHeader>
                <hr />
                <CardBody
                    editMode={props.editMode}
                    readOnly={props.readOnly}
                    edited={props.onEdit}
                    changed={props.onTextChange}
                    currentText={props.editText}
                    styleChanged={props.onStyleChange}>
                    {props.text}
                </CardBody>
            </div>
        </div>
    );
};

export default Card;
