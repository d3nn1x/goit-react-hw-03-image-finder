import React, { Component } from 'react';

import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import fetchImages from './services/fetchImages.js';
import Notification from './components/notification/Notification';

class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    error: null,
    isLoading: false,
    lastPage: 0,
    largeImageURL: '',
    moreItems: true,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.search;
    const nextQuery = this.state.search;

    if (prevQuery !== nextQuery) {
      this.getImages();
    }
  }

  getImages = () => {
    this.setState({ isLoading: true });

    fetchImages(this.state.search, this.state.page)
      .then(data => {
        if (data.hits.length > 0) {
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
            page: prevState.page + 1,
            lastPage: Math.ceil(data.totalHits / 12),
          }));

          if (this.state.page > 2) {
            window.scrollTo({
              top:
                document.documentElement.scrollTop +
                document.documentElement.clientHeight -
                180,
              behavior: 'smooth',
            });
          }
        } else this.setState({ moreItems: false });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  getSearchFormSubmit = value => {
    this.setState({
      search: value,
      images: [],
      page: 1,
      error: null,
      isLoading: false,
      lastPage: 0,
      largeImageURL: '',
      moreItems: true,
    });
  };

  openModal = url => {
    this.setState({ largeImageURL: url });
  };

  closeModal = () => {
    this.setState({ largeImageURL: '' });
  };

  render() {
    const {
      images,
      isLoading,
      page,
      lastPage,
      largeImageURL,
      moreItems,
      error,
    } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.getSearchFormSubmit} />
        {error && (
          <Notification message={`Something went wrong: ${error.message}`} />
        )}
        {!moreItems && (
          <Notification message={'Sorry, your images not found :('} />
        )}

        <ImageGallery images={images} openModal={this.openModal} />

        {isLoading && <Loader />}
        {lastPage >= page && <Button getImages={this.getImages} />}

        {largeImageURL && (
          <Modal largeImageURL={largeImageURL} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}

export default App;
