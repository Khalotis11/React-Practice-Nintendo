import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { LeftConsole } from "./components/leftConsole/LeftConsole";
import { Display } from "./components/nintendoDisplay/Display";
import { RightConsole } from "./components/rightConsole/RightConsole"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="nintendo-container">
          {" "}
          <LeftConsole />
          <Display />
          <RightConsole />
        </div>
      </header>
    </div>
  );
}

export default App;
