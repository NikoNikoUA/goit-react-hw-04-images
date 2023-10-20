import React, { useState } from 'react';
import css from './ImageGalleryItem.module.css';
import { ModalWindow } from '../Modal/Modal';

export const ImageGalleryItem = ({ tags, image, largeImageURL }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalToggle = () => {
    setIsModalOpen(prevState => {
      return !prevState;
    });
  };

  return (
    <>
      <img
        className={css.image}
        src={image}
        alt={tags}
        onClick={modalToggle}
        loading="lazy"
      />
      <ModalWindow
        isModalOpen={isModalOpen}
        closeModal={modalToggle}
        largeImageURL={largeImageURL}
        tags={tags}
      />
    </>
  );
};
