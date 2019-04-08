import React, { Suspense } from "react";
import MenuLoading from "./MenuLoading.svg";
import "./App.css";

const Menu = React.lazy(() => import("./Menu"));

const App = () => (
  <div className="App">
    <Suspense fallback={<img src={MenuLoading} className="App-menu-loading" />}>
      <Menu pageWrapId="App-content" outerContainerId="App" />
    </Suspense>
    <div className="App-content">
      <header className="App-header" />
      <div className="App-Content">Nothing to see here</div>
      <footer className="App-footer" />
    </div>
  </div>
);

export default App;
