import React from 'react';
import logo from './logo.svg';
import data from './notes.json';
import './App.css';

interface Notes {
  question: string;
  answer: string;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {data.map((person: Notes) => (

          <p>
            {person.question}
          </p>
        ))}

      </header>
    </div>
  );
}

export default App;
