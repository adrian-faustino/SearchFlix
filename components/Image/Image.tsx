import React, { FunctionComponent } from "react";
import { default as NextImage } from "next/image";
import classNames from "classnames";

import { isValidHttpUrl } from "utils/string";
import styles from "./Image.module.scss";

interface IImageProps {
  src: string;
  alt: string;
  height: number;
  width: number;
  className?: string;
}

const Image: FunctionComponent<IImageProps> = ({
  src,
  alt,
  height,
  width,
  className,
}) => {
  const containerClassnames: string = classNames(styles.Image, className);

  const imgUrl: string = isValidHttpUrl(src)
    ? src
    : "/no_image_placeholder.svg";

  return (
    <NextImage
      src={imgUrl}
      alt={alt}
      height={height}
      width={width}
      className={containerClassnames}
    />
  );
};

export default Image;
