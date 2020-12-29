import React from 'react';
import { connect } from 'react-redux';
import { FaPen } from 'react-icons/fa';
import { FaSave } from 'react-icons/fa';
import { FaUndo } from 'react-icons/fa';
import '../Card.css';
import TextInputField from '../TextInputField';

const CardHeader = (props) => {
    let editPart = null;
    let readOnly = props.ctxReadOnly;

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
                <div onDoubleClick={props.onDoubleClick}>
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

const mapStateToProps = (state) => {
    return { ctxReadOnly: state.readOnly };
};

export default connect(mapStateToProps)(CardHeader);
