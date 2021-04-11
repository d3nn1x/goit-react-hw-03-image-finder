import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ images, openModal }) {
  return (
    <ul className="ImageGallery">
      {images.map(({ webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={uuidv4()}
            webformatURL={webformatURL}
            openModal={openModal}
            largeImageURL={largeImageURL}
          />
        );
      })}
    </ul>
  );
}
