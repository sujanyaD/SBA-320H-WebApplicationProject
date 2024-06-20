import React, { useState } from 'react';
import { toast } from 'react-toastify';

const SearchBooks = ({ getSearch, search, setSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();
    if (search !== '') {
      getSearch();
    } else {
      toast.error('Enter Book Name!!');
    }
  };
  return (
    <div>
        <h2>Welcome To My Book Collection</h2>
      <h1 className="title">Search your Book</h1>
      <form onSubmit={handleSubmit} className="search--form">
        <input
          type="text"
          placeholder="Find Book..."
          className="search--bar"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button type="submit" className="search--btn">
          <img
            src="https://img.icons8.com/color/344/4a90e2/search--v1.png"
            alt=""
          />
        </button>
      </form>
    </div>
  );
};
export default SearchBooks;