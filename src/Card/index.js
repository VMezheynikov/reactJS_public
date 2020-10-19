import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    state = {
        cardStyle: {},
    };

    checkBoxChangeHandler = (event) => {
        if (event.target.checked) {
            this.setState({ cardStyle: { color: 'red' } });
        } else {
            this.setState({ cardStyle: { color: 'green' } });
        }
    };

    render() {
        return (
            <div className="Card" style={this.state.cardStyle}>
                <h1>
                    {this.props.title}{' '}
                    <input
                        type="checkbox"
                        onClick={this.checkBoxChangeHandler}
                    />
                </h1>
                <hr />
                <p>{this.props.children}</p>
            </div>
        );
    }
}

export default Card;
