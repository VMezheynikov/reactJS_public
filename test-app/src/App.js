import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Test application1.
        </p>
      </header>
      <Card title="Test card title">Inner card text.</Card>
    </div>
  );
}

export default App;
