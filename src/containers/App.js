import React from 'react';
import './App.css';
import CardList from '../сomponents/CardList';
import { CardContextProvider } from '../context/CardsContext';

function App() {
    return (
        <CardContextProvider>
            {' '}
            <div className="App">
                <header className="App-header">
                    <p>Test application.</p>
                </header>
                <CardList />
            </div>
        </CardContextProvider>
    );
}

export default App;
