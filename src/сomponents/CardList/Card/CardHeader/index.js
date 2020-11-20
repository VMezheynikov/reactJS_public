import React, { useContext } from 'react';
import { FaPen } from 'react-icons/fa';
import { FaSave } from 'react-icons/fa';
import { FaUndo } from 'react-icons/fa';
import '../Card.css';
import TextInputField from '../TextInputField';
import CardsContext from '../../../../context/cards-context';

const CardHeader = (props) => {
    const cardsContext = useContext(CardsContext);
    let editPart = null;
    if (!cardsContext.readOnly) {
        editPart = (
            <div>
                <div>
                    <button
                        className="btn"
                        onClick={cardsContext.onUndo(props.cardId)}>
                        <FaUndo />
                    </button>
                    <button
                        className="btn"
                        onClick={cardsContext.onSave(props.cardId)}>
                        <FaSave />
                    </button>
                </div>
                <TextInputField
                    id="TitleField"
                    caption="Title"
                    changed={cardsContext.onTitleChange(props.cardId)}
                    currentText={props.currentText}></TextInputField>
                <hr />
            </div>
        );
    }

    let editButton = null;
    if (!cardsContext.readOnly) {
        editButton = (
            <button
                className="btn"
                onClick={cardsContext.onEdit(props.cardId)}
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
                            onClick={cardsContext.onStyleChange(props.cardId)}
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
