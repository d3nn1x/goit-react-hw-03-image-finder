import axios from 'axios';

const key = '18956456-bd9c7bc8d47963449f9d8046d';

const fetchImages = (searchQuery, page = 1) => {
  const apiUrl = `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;
  return axios.get(apiUrl).then(res => res.data);
};

export default fetchImages;
