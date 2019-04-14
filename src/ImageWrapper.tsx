import React, { Suspense } from "react";
import MenuLoading from "./MenuLoading.svg";
import ImageContainer from "./ImageContainer";

const Img = React.lazy(() => import("./Img"));

const ImageWrapper: React.FC<{ large: string; small: string }> = props => (
  <Suspense
    fallback={
      <ImageContainer>
        <img className="blurry" src={props.small} />
      </ImageContainer>
    }
  >
    <ImageContainer>
      <Img src={props.large} />
    </ImageContainer>
  </Suspense>
);

export default ImageWrapper;
