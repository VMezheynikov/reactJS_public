import React, { useContext } from 'react';
import '../Card.css';
import TextInputField from '../TextInputField';
import { CardsContext } from '../../../../context/CardsContext';

const CardBody = (props) => {
    const cardContext = useContext(CardsContext);
    let editPart = null;
    if (!cardContext.readOnly) {
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
                <div>
                    <p style={{ overflow: 'hidden' }}>{props.children}</p>
                </div>
            )}
        </div>
    );
};

export default CardBody;
