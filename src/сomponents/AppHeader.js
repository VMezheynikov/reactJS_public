import React from 'react';
import '../containers/App.css';
import { Link } from 'react-router-dom';

function AppHeader() {
    return (
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
                            <Link to="/not-found">Not found</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default AppHeader;
