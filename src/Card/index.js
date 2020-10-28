import React, { Component } from 'react';
import { FaPen } from 'react-icons/fa';
import { FaSave } from 'react-icons/fa';
import { FaUndo } from 'react-icons/fa';
import './Card.css';
import TextInputField from './TextInputField';

class Card extends Component {
    render() {
        let editPart = null;
        if (!this.props.readOnly) {
            editPart = (
                <div>
                    <div>
                        <button className="btn" onClick={this.props.onUndo}>
                            <FaUndo />
                        </button>
                        <button className="btn" onClick={this.props.onSave}>
                            <FaSave />
                        </button>
                    </div>
                    <TextInputField
                        id="TitleField"
                        caption="Title"
                        changed={this.props.onTitleChange}
                        currentText={this.props.editTitle}></TextInputField>
                    <hr />

                    <TextInputField
                        id="TextField"
                        caption="Text"
                        changed={this.props.onTextChange}
                        currentText={this.props.editText}></TextInputField>
                </div>
            );
        }

        let editButton = null;
        if (!this.props.readOnly) {
            editButton = (
                <button
                    className="btn"
                    onClick={this.props.onEdit}
                    style={{
                        top: 0,
                        right: 20,
                    }}>
                    <FaPen />
                </button>
            );
        }

        return (
            <div className="Card" style={this.props.cardStyle}>
                {this.props.editMode ? (
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
                                    onClick={this.props.onStyleChange}
                                />
                                {editButton}
                                <p style={{ overflow: 'hidden' }}>
                                    {this.props.title}
                                </p>
                            </div>
                        </h1>
                        <hr />
                        <p style={{ overflow: 'hidden' }}>{this.props.text}</p>
                    </div>
                )}
            </div>
        );
    }
}

export default Card;
