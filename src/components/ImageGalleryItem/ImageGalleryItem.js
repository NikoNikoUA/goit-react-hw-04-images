import React, { useState, useEffect } from 'react';
import css from './ImageGalleryItem.module.css';
import { ModalWindow } from '../Modal/Modal';

export const ImageGalleryItem = ({ tags, image, largeImageURL }) => {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  const { isModalOpen } = this.state;

  return (
    <>
      <img
        className={css.image}
        src={image}
        alt={tags}
        onClick={this.openModal}
        loading="lazy"
      />
      <ModalWindow
        isModalOpen={isModalOpen}
        closeModal={this.closeModal}
        largeImageURL={largeImageURL}
        tags={tags}
      />
    </>
  );
};
