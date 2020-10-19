import React from 'react';
import './App.css';
import Card from './Card';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Test application.</p>
            </header>
            <Card title="Test card title">Inner card text.</Card>
        </div>
    );
}

export default App;
