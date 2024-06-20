
import React, { useEffect, useState ,useReducer} from 'react';
import './App.css';
import Books from './components/books';
import SearchBooks from './components/searchBooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('java');
  const [books, setBooks] = useState([]);
  const [id, setId] = useState('');
  const [condition, setCondition] = useState(false);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCJbUF_JRiOk9R6abyiAZ3QddT6TQ_LAO0`
    )
      .then(res => res.json())
      .then(result => {
        setBooks(result.items);
        toast.success('Books found successfully!');
      })
      .catch(error => {
        alert(error.message);
        toast.error('Failed to fetch books.');
      });
  }, [query]);

  const getSearch = () => {
    setQuery(search);
    setSearch('');
  };
  const checkBooks = id => {
    setId(id);
    setCondition(true);
  };
  return (
    <div className="App">
       <ToastContainer />
      <SearchBooks getSearch={getSearch} search={search} setSearch={setSearch} />
      <Books books={books} checkBooks={checkBooks} />
      {condition ? (
        <div className="reading--block">
          <button className="close--btn" onClick={() => setCondition(false)}>
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