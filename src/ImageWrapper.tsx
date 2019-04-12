import React, { Suspense } from "react";
import ImageContainer from "./ImageContainer";

const Image = React.lazy(() => import("./Image"));

const ImageWrapper: React.FC<{ large: string; small: string }> = props => (
  <Suspense
    fallback={
      <ImageContainer>
        <img className="blurry" src={props.small} />
      </ImageContainer>
    }
  >
    <ImageContainer>
      <Image src={props.large} />
    </ImageContainer>
  </Suspense>
);

export default ImageWrapper;
