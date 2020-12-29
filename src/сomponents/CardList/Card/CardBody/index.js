import React from 'react';
import { connect } from 'react-redux';
import '../Card.css';
import TextInputField from '../TextInputField';

const CardBody = (props) => {
    let editPart = null;
    if (!props.ctxReadOnly) {
        editPart = (
            <div>
                <TextInputField
                    id="TextField"
                    caption="Text"
                    changed={props.onTextChange}
                    currentText={props.currentText}></TextInputField>
            </div>
        );
    }

    return (
        <div>
            {props.editMode ? (
                <div>{editPart}</div>
            ) : (
                <div onDoubleClick={props.onDoubleClick}>
                    <p style={{ overflow: 'hidden' }}>{props.children}</p>
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return { ctxReadOnly: state.readOnly };
};

export default connect(mapStateToProps)(CardBody);
