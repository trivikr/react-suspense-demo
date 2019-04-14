import React from "react";
import { unstable_createResource } from "react-cache";

const ImageResource = unstable_createResource<string, string>(
  source =>
    new Promise(resolve => {
      const img = new Image();
      img.onload = () => resolve(source);
      img.src = source;
    })
);

const Img = (props: { className?: string; src: string }) => {
  const { src, className } = props;
  ImageResource.read(src);
  return <img className={className} src={src} />;
};

export default Img;
