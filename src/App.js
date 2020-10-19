import React, { Component } from 'react';
import './App.css';
import Card from './Card';

class App extends Component {
    state = {
        inStyle: {},
    };

    checkBoxChangeHandler = (event) => {
        if (event.target.checked) {
            this.setState({ inStyle: { color: 'red' } });
        } else {
            this.setState({ inStyle: { color: 'green' } });
        }
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>Test application.</p>
                </header>
                <Card
                    title="Test card title"
                    changed={this.checkBoxChangeHandler}
                    inStyle={this.state.inStyle}>
                    Inner card text.
                </Card>
            </div>
        );
    }
}

export default App;
