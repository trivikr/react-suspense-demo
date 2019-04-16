import React from "react";
import "./App.css";
import Menu from "./Menu";

const App = () => (
  <div className="App">
    <Menu pageWrapId="App-content" outerContainerId="App" />
    <div className="App-content">
      <header className="App-header" />
      <div className="App-Content">↖ Menu is loading with the page</div>
      <footer className="App-footer" />
    </div>
  </div>
);

export default App;
