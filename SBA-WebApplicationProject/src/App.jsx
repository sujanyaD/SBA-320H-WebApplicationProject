

import React, { useEffect, useState } from 'react';
import './App.css';
import Books from './components/books';
import SearchBooks from './components/searchBooks';

function App() {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('java');
  const [books, setBooks] = useState([]);
  const [id, setId] = useState('');
  const [term, setTerm] = useState(false);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCJbUF_JRiOk9R6abyiAZ3QddT6TQ_LAO0`
    )
      .then(res => res.json())
      .then(result => {
        setBooks(result.items);
      })
      .catch(error => alert(error.message));
  }, [query]);

  const getSearch = () => {
    setQuery(search);
    setSearch('');
  };

  const checkIt = id => {
    setId(id);
    setTerm(true);
  };

  return (
    <div className="App">
      <SearchBooks getSearch={getSearch} search={search} setSearch={setSearch} />

      <Books books={books} checkIt={checkIt} />

      {term ? (
        <div className="reading--block">
          <button className="close--btn" onClick={() => setTerm(false)}>
            X
          </button>
          <iframe
            src={`https://books.google.com.pk/books?id=${id}&lpg=PP1&pg=PP1&output=embed`}
            title="Pdf Viewer"
            className="iframe"
          ></iframe>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default App;