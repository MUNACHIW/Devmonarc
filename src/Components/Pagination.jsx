import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css'; // You can create your own CSS for styling

function Pagination({ pageCount, onPageChange }) {
  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={onPageChange}
      containerClassName="pagination"
      activeClassName="active"
    />
  );
}

export default Pagination;