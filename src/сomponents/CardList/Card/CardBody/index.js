import React from 'react';
import '../Card.css';
import TextInputField from '../TextInputField';

const CardBody = (props) => {
    let editPart = null;
    if (!props.readOnly) {
        editPart = (
            <div>
                <TextInputField
                    id="TextField"
                    caption="Text"
                    changed={props.changed}
                    currentText={props.currentText}></TextInputField>
            </div>
        );
    }

    return (
        <div>
            {props.editMode ? (
                <div>{editPart}</div>
            ) : (
                <div>
                    <p style={{ overflow: 'hidden' }}>{props.children}</p>
                </div>
            )}
        </div>
    );
};

export default CardBody;
