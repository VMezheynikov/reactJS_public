import React from 'react';
import './App.css';
import Home from './Home/Home';
import { CardContextProvider } from '../context/CardsContext';
import { BrowserRouter, Link } from 'react-router-dom';

function App() {
    return (
        <CardContextProvider>
            {' '}
            <div className="App">
                <BrowserRouter>
                    <header className="App-header">
                        <div>
                            <p>Test application.</p>
                        </div>
                        <div>
                            <nav>
                                <ul>
                                    <li>
                                        <Link to="/home">Home</Link>
                                        <Link
                                            to={{
                                                pathname: '/sing-in',
                                                hash: '#submit',
                                                search: '?quick-submit=true',
                                            }}>
                                            Sing in
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </header>
                    <Home />
                </BrowserRouter>
            </div>
        </CardContextProvider>
    );
}

export default App;
