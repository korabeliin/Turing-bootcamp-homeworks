import React from "react";

import styles from './ImagesList.module.css';
import LoadingIndicator from "../../common/LoadingIndicator";

const ImagesList = ({ images, loading }) => {
  if (loading) {
    return (
      <div className={styles.loadingIndicatorWrapper}>
        <LoadingIndicator />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {images.map(image => (
        <div className={styles.imageCardWrapper} key={image.id}>
          <div className={styles.imageWrapper}>
            <img className={styles.image} alt={image.alt} src={image.url} />
          </div>
          <div className={styles.imageText}>{image.alt}</div>
        </div>
      ))}
    </div>
  )
}

export default ImagesList;