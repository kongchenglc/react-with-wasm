import React, { useEffect, useState } from 'react';
import init, { Chart } from "wasm-lib";
import { main, setup } from "./bootstrap"
import logo from './logo.svg';
import './App.css';

function App() {

  const [ans, setAns] = useState(0);
  useEffect(() => {
    init().then(() => {
      setup(Chart);
      main();
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>1 + 1 = {ans}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
