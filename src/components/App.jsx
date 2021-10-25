import React, { useEffect, useState } from 'react';
import Container from './Container/Container';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import ImageGallery from './ImageGallery/ImageGallery';
import imagesAPI from '../services/images-api';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './App.module.css';

export default function App() {
  const [gallery, setGallery] = useState([]);
  const [status, setStatus] = useState('idle');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [modalImg, setModalImg] = useState('');
  const [modalAlt, setModalAlt] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query.trim() === '') {
      return;
    }

    setStatus('pending');

    imagesAPI
      .fetchImages(query, page)
      .then(({ hits }) => {
        const images = hits.map(({ id, webformatURL, largeImageURL, tags }) => {
          return { id, webformatURL, largeImageURL, tags };
        });
        // console.log(images);
        if (images.length > 0) {
          setGallery(state => [...state, ...images]);
          setStatus('resolved');
        } else {
          alert(`По запросу ${query} ничего не найдено.`);
          setStatus('idle');
        }
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      })
      .finally(() => {
        if (page > 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      });
  }, [page, query]);

  const handleSubmitInput = newQuery => {
    if (newQuery !== query) {
      setGallery([]);
      setPage(1);
      setQuery(newQuery);
    }
  };

  const handleClickImg = event => {
    const imgForModal = event.target.dataset.src;
    const altForModal = event.target.alt;

    setModalImg(imgForModal);
    setModalAlt(altForModal);
    setShowModal(true);
  };

  const handleClickBtn = () => {
    setPage(state => state + 1);
    setStatus('pending');
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  if (status === 'idle') {
    return (
      <Container>
        <Searchbar onSubmit={handleSubmitInput} />
      </Container>
    );
  }

  if (status === 'rejected') {
    return <h1>{error.message}</h1>;
  }

  if (status === 'resolved' || status === 'pending') {
    return (
      <>
        {showModal && (
          <Modal onClose={toggleModal}>
            <img src={modalImg} alt={modalAlt} />
          </Modal>
        )}
        <Container>
          <Searchbar onSubmit={handleSubmitInput} />
          {gallery.length > 0 && (
            <ImageGallery onClickImg={handleClickImg} gallery={gallery} />
          )}
          {status === 'pending' ? (
            <Loader
              className={s.loader}
              type="Circles"
              color="#00BFFF"
              height={80}
              width={80}
            />
          ) : (
            <Button handleClickBtn={handleClickBtn} />
          )}
        </Container>
      </>
    );
  }
}
