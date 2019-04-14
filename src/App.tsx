import React, { Suspense } from "react";
import MenuLoading from "./MenuLoading.svg";
import "./App.css";
import ImageWrapper from "./ImageWrapper";

const Menu = React.lazy(() => import("./Menu"));

const App = () => {
  const images = Array.from(Array(5)).map(() => {
    const randomNum = Math.floor(Math.random() * 100);
    return {
      large: `https://picsum.photos/1920/1080/?image=${randomNum}`,
      small: `https://picsum.photos/200/113/?image=${randomNum}`
    };
  });
  return (
    <div className="App">
      <Suspense
        fallback={<img src={MenuLoading} className="App-menu-loading" />}
      >
        <Menu pageWrapId="App-content" outerContainerId="App" />
      </Suspense>
      <div className="App-header" />
      <div className="App-content">
        <div className="App-title">Product Title</div>
        <ImageWrapper small={images[0].small} large={images[0].large} />
        <div className="App-description">Product description</div>
      </div>
      <div className="App-footer" />
    </div>
  );
};

export default App;
