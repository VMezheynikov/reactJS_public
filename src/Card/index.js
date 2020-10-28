import React, { Component } from 'react';
import { FaPen } from 'react-icons/fa';
import { FaSave } from 'react-icons/fa';
import { FaUndo } from 'react-icons/fa';
import './Card.css';
import TextInputField from './TextInputField';

const Card = (props) => {
    let editPart = null;
    if (!props.readOnly) {
        editPart = (
            <div>
                <div>
                    <button className="btn" onClick={props.onUndo}>
                        <FaUndo />
                    </button>
                    <button className="btn" onClick={props.onSave}>
                        <FaSave />
                    </button>
                </div>
                <TextInputField
                    id="TitleField"
                    caption="Title"
                    changed={props.onTitleChange}
                    currentText={props.editTitle}></TextInputField>
                <hr />

                <TextInputField
                    id="TextField"
                    caption="Text"
                    changed={props.onTextChange}
                    currentText={props.editText}></TextInputField>
            </div>
        );
    }

    let editButton = null;
    if (!props.readOnly) {
        editButton = (
            <button
                className="btn"
                onClick={props.onEdit}
                style={{
                    top: 0,
                    right: 20,
                }}>
                <FaPen />
            </button>
        );
    }

    return (
        <div className="Card" style={props.cardStyle}>
            {props.editMode ? (
                <div>{editPart}</div>
            ) : (
                <div>
                    <h1>
                        <div style={{ position: 'relative' }}>
                            <input
                                id="checkboxStyle"
                                type="checkbox"
                                style={{
                                    top: 0,
                                    right: 0,
                                }}
                                onClick={props.onStyleChange}
                            />
                            {editButton}
                            <p style={{ overflow: 'hidden' }}>{props.title}</p>
                        </div>
                    </h1>
                    <hr />
                    <p style={{ overflow: 'hidden' }}>{props.text}</p>
                </div>
            )}
        </div>
    );
};

export default Card;
