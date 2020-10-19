import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className="Card" style={props.inStyle}>
            <h1>
                {props.title} <input type="checkbox" onClick={props.changed} />
            </h1>
            <hr />
            <p>{props.children}</p>
        </div>
    );
};

export default Card;
