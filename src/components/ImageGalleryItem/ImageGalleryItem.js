import React from 'react';

export default function ImageGalleryItem({
  webformatURL,
  largeImageURL,
  openModal,
}) {
  return (
    <li
      className="ImageGalleryItem"
      onClick={() => {
        openModal(largeImageURL);
      }}
    >
      <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
    </li>
  );
}
