import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css'
import { Searchbar } from './Searchbar/Searchbar'
import { ImageGallery } from './ImageGallery/ImageGallery'
import { Button } from './Button/Button'
import { fetchImages } from './Api/Api';
import { Loader} from '../components/Loader/Loader'

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    if(!query){
      return;
    }
    async function getImages() {
      try {
        setLoading(true);
        setError(false)
        const fetchedImages = await fetchImages(query, page, {signal: controller.signal });
       if (query.trim() === '') {
      toast.error('Please enter valid request');
      return;
    }

        if (fetchedImages.hits.length === 0) {
          toast.info('There are no pictures matching your request')
        }

        setImages(prevImages => [...prevImages, ...fetchedImages.hits]);
        setLoadMore(page < Math.ceil(fetchedImages.totalHits / 12)); 
              }
          catch (error) {
            if(error.code !== "ERR_CANCELED") {
              setError(true)
            }
      } finally {
        setLoading(false);
      }
      }
      getImages();
      return () => {
        controller.abort();
      }
  
}, [page, query]);

 
  const onFormSubmit = (value) => {
     if (query === value) {
      return;
    }
    setQuery(value);
    setImages([]);
    setPage(1);
    setError(false);
    setLoadMore(false);
  }

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  }
 
    return(
    <div className={css.App}>
      <Searchbar onSubmit={onFormSubmit} />
      {error && toast.error(`Whoops, something went wrong. Try reloading the page`)}
      {loading && <Loader/>}
      {images.length > 0 && <ImageGallery images={images} />}
      {loadMore && <Button onLoadMore={onLoadMore} />}
      <ToastContainer autoClose={4000} theme="colored" />
    </div>
  )
  };


