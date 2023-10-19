import React, { useState } from 'react';
import css from './ImageGalleryItem.module.css';
import { ModalWindow } from '../Modal/Modal';

export const ImageGalleryItem = ({ tags, image, largeImageURL }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <img
        className={css.image}
        src={image}
        alt={tags}
        onClick={openModal}
        loading="lazy"
      />
      <ModalWindow
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        largeImageURL={largeImageURL}
        tags={tags}
      />
    </>
  );
};
