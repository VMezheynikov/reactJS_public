import React from 'react';
import { FaPen } from 'react-icons/fa';
import { FaSave } from 'react-icons/fa';
import { FaUndo } from 'react-icons/fa';
import '../Card.css';
import TextInputField from '../TextInputField';

const CardHeader = (props) => {
    let editPart = null;
    if (!props.readOnly) {
        editPart = (
            <div>
                <div>
                    <button className="btn" onClick={props.undoClick}>
                        <FaUndo />
                    </button>
                    <button className="btn" onClick={props.saveClick}>
                        <FaSave />
                    </button>
                </div>
                <TextInputField
                    id="TitleField"
                    caption="Title"
                    changed={props.changed}
                    currentText={props.currentText}></TextInputField>
                <hr />
            </div>
        );
    }

    let editButton = null;
    if (!props.readOnly) {
        editButton = (
            <button
                className="btn"
                onClick={props.edited}
                style={{
                    top: 0,
                    right: 20,
                }}>
                <FaPen />
            </button>
        );
    }

    return (
        <div>
            {props.editMode ? (
                <div>{editPart}</div>
            ) : (
                <div>
                    <div style={{ position: 'relative' }}>
                        <input
                            id="checkboxStyle"
                            type="checkbox"
                            style={{
                                top: 0,
                                right: 0,
                            }}
                            onClick={props.styleChanged}
                        />
                        {editButton}
                        <p style={{ overflow: 'hidden' }}>{props.children}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CardHeader;
