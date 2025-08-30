// ** React Imports
import {memo} from "react";
import type { SyntheticEvent } from "react";

// ** Styles Imports
import styles from "./index.module.scss";

// ** Thirds party Imports
import {  LazyLoadImage} from "react-lazy-load-image-component";
import type {
  LazyLoadImageProps,
} from "react-lazy-load-image-component";

import EmptyImage from "./assets/img/empty-image.svg";

function CustomizeImg({ ...props }: LazyLoadImageProps) {
  // ** Props
  const { src, className, children } = props;

  // ** Functions
  const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    // Feature: Fallback to the empty image on error
    e.currentTarget.src = EmptyImage;
    e.currentTarget.style.background = "#eaf3ff";
  };

  return (
    <LazyLoadImage
      {...props}
      src={src}
      className={`${styles.customizeImage} `}
      effect="opacity"
      wrapperClassName={`${styles.customizeImageWrapper} ${className}`}
      onError={handleError}
      alt=""
    >
      {children}
    </LazyLoadImage>
  );
}

export default memo(CustomizeImg);
