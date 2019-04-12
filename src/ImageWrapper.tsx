import React from "react";
import ImageContainer from "./ImageContainer";

const ImageWrapper: React.FC<{ large: string; small: string }> = props => (
  <ImageContainer>
    <img src={props.large} />
  </ImageContainer>
);

export default ImageWrapper;
