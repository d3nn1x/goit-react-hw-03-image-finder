import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Spinner from 'react-loader-spinner';

const Loader = () => (
  <div className="spinner">
    <Spinner type="Oval" color="#3f51b5" height={50} width={100} />
  </div>
);

export default Loader;
