import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SomeType from "./sometype";
import "nes.css/css/nes.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <SomeType />
        {/* <p>hello</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn reactjs
        </a> */}
      </header>
    </div>
  );
}

export default App;
