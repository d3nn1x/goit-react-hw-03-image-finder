import React from 'react';

export default function Button({ getImages }) {
  return (
    <div className="inner">
      <button type="button" className="Button" onClick={getImages}>
        Load more
      </button>
    </div>
  );
}
