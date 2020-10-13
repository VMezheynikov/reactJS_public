import React from 'react';
import './Card.css';

const card = (props) => {
    return (
        <div className="Card">
            <h1>{props.title}</h1>
            <hr/>
            <p>{props.children}</p>
        </div>
    )
}

export default card;