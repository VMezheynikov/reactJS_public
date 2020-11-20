import React, { useContext } from 'react';
import '../Card.css';
import TextInputField from '../TextInputField';
import CardsContext from '../../../../context/cards-context';

const CardBody = (props) => {
    const cardsContext = useContext(CardsContext);
    let editPart = null;
    if (!cardsContext.readOnly) {
        editPart = (
            <div>
                <TextInputField
                    id="TextField"
                    caption="Text"
                    changed={cardsContext.onTextChange(props.cardId)}
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
