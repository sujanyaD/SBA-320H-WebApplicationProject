
import { useEffect, useState } from "react";
import "./App.css";

// https://www.googleapis.com/books/v1/volumes?q=java&key=AIzaSyCJbUF_JRiOk9R6abyiAZ3QddT6TQ_LAO0

function App() {
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState('java')
  const [books, setBooks] = useState([]);
  const [id, setId] = useState("");
  const [term, setTerm] = useState(false);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCJbUF_JRiOk9R6abyiAZ3QddT6TQ_LAO0`
    )
      .then((res) => res.json())
      .then((result) => {
        setBooks(result.items);
        // console.log(books);
      })
      .catch((error) => alert(error.message));
  }, [query]);

  const getSearch = e => {
    e.preventDefault()

    if(search !== ''){
      setQuery(search)
      setSearch('')
    } else {
      alert('Enter Book Name!!')
    }
  }
  
  const checkIt = (id) => {
    setId(id)
    setTerm(true)
  }

  return (
    <div className="App">
      <h1 className="title">Look for a Book</h1>

      <form onSubmit={getSearch} className="search--form">
        <input
          type="text"
          placeholder="Search Book..."
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

      <div className="books">
        {books.slice(0, 3).map((book, key) => (
          <div key={key} className="book--item">
            <img
              src={Object.values(book?.volumeInfo.imageLinks)[0]}
              alt="cover img"
              className="BookImg"
            />
            <div className="book--item-btns">
              <a
                href={book.volumeInfo.previewLink}
                target="_blank"
                rel="noreferrer"
                className="preview--btn"
              >
                Preview
              </a>

              {book?.accessInfo.pdf["acsTokenLink"] !== undefined ? (
                <button className="read--btn" onClick={() => checkIt(book?.id)}>Read Online</button>
              ) : (
                <h3 className="null--point">Not Available</h3>
              )}
            </div>
          </div>
        ))}
      </div>

      {term ? (
        <div className="reading--block">
          <button className="close--btn" onClick={() => setTerm(false)}>X</button>
          <iframe
            src={`https://books.google.com.pk/books?id=${id}&lpg=PP1&pg=PP1&output=embed`}
            title="Pdf Viewer"
            className="iframe"
          ></iframe>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
