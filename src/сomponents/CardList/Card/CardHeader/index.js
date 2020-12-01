import React, { useContext } from 'react';
import { FaPen } from 'react-icons/fa';
import { FaSave } from 'react-icons/fa';
import { FaUndo } from 'react-icons/fa';
import '../Card.css';
import TextInputField from '../TextInputField';
import { CardsContext } from '../../../../context/CardsContext';

const CardHeader = (props) => {
    const cardContext = useContext(CardsContext);

    let editPart = null;
    let readOnly = cardContext.readOnly;

    if (!readOnly) {
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
                    currentText={props.currentText}></TextInputField>
                <hr />
            </div>
        );
    }

    let editButton = null;
    if (!readOnly) {
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
                            onClick={props.onStyleChange}
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
