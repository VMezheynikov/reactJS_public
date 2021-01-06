import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';
import AppHeader from '../сomponents/AppHeader';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AppHeader />
                <Home />
            </BrowserRouter>
        </div>
    );
}

export default App;
