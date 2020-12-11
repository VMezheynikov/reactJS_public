import React from 'react';
import './App.css';
import Home from './Home';
import { CardContextProvider } from '../context/CardsContext';
import { BrowserRouter } from 'react-router-dom';
import AppHeader from '../сomponents/AppHeader';

function App() {
    return (
        <CardContextProvider>
            {' '}
            <div className="App">
                <BrowserRouter>
                    <AppHeader />
                    <Home />
                </BrowserRouter>
            </div>
        </CardContextProvider>
    );
}

export default App;
