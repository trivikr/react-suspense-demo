import React from "react";
import ImageContainer from "./ImageContainer";

const Image = (props: { className?: string; src: string }) => (
  <ImageContainer>
    <img className={props.className} src={props.src} />
  </ImageContainer>
);

export default Image;
