import React from 'react';

const Pagination = ({ currentPage, goPrev, goNext, totalItems, itemsPerPage }) => {
  const noLess = currentPage > 1;
  const noMore = totalItems / currentPage > itemsPerPage;
  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={!noLess}>
        {noLess && '←'}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" onClick={goNext} disabled={!noMore}>
        {noMore && '→'}
      </button>
    </div>
  );
};

export default Pagination;
