import React from 'react';
import './App.css';
import CardList from './CardList';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Test application.</p>
            </header>
            <CardList>Inner card text.</CardList>
        </div>
    );
}

export default App;
