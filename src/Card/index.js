import React, { Component } from 'react';
import { FaPen } from 'react-icons/fa';
import { FaSave } from 'react-icons/fa';
import { FaUndo } from 'react-icons/fa';
import './Card.css';
import TextInputField from './TextInputField';

class Card extends Component {
    state = {
        cardStyle: {},
        title: this.props.title,
        text: this.props.children,
        editTitle: this.props.title,
        editText: this.props.children,
        editMode: false,
    };

    checkBoxChangeHandler = (event) => {
        if (event != null && event.target.checked) {
            this.setState({ cardStyle: { color: 'red' } });
        } else {
            this.setState({ cardStyle: { color: 'green' } });
        }
    };

    buttonEditHandler = () => {
        this.setState({ editMode: true });
        this.checkBoxChangeHandler();
    };

    buttonUndoHandler = () => {
        const eTtl = this.state.title;
        const eTxt = this.state.text;
        this.setState({
            editTitle: eTtl,
            editText: eTxt,
            editMode: false,
        });
    };

    buttonSaveHandler = () => {
        this.setState({
            title: this.state.editTitle,
            text: this.state.editText,
            editMode: false,
        });
    };

    titleChangeHandler = (event) => {
        this.setState({ editTitle: event.target.value });
    };

    textChangeHandler = (event) => {
        this.setState({ editText: event.target.value });
    };

    render() {
        return (
            <div className="Card" style={this.state.cardStyle}>
                {this.state.editMode ? (
                    <div>
                        <div>
                            <button
                                className="btn"
                                onClick={this.buttonUndoHandler}>
                                <FaUndo />
                            </button>
                            <button
                                className="btn"
                                onClick={this.buttonSaveHandler}>
                                <FaSave />
                            </button>
                        </div>
                        <TextInputField
                            id="TitleField"
                            caption="Title"
                            changed={this.titleChangeHandler}
                            currentText={this.state.editTitle}></TextInputField>
                        <hr />

                        <TextInputField
                            id="TextField"
                            caption="Text"
                            changed={this.textChangeHandler}
                            currentText={this.state.editText}></TextInputField>
                    </div>
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
                                    onClick={this.checkBoxChangeHandler}
                                />
                                <button
                                    className="btn"
                                    onClick={this.buttonEditHandler}
                                    style={{
                                        top: 0,
                                        right: 20,
                                    }}>
                                    <FaPen />
                                </button>
                                <p style={{ overflow: 'hidden' }}>
                                    {this.state.title}
                                </p>
                            </div>
                        </h1>
                        <hr />

                        <p style={{ overflow: 'hidden' }}>{this.state.text}</p>
                    </div>
                )}
            </div>
        );
    }
}

export default Card;
