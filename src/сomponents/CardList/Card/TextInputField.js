import React from 'react';

const TextInputField = (props) => {
    return (
        <div>
            <label htmlFor="inputField">{props.caption}</label>
            <input
                type="text"
                id="inputField"
                onChange={props.changed}
                value={props.currentText}
            />
        </div>
    );
};

export default TextInputField;
