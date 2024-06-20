import React from 'react';
const Books = ({ books, checkBooks }) => {
  return (
    <div className="books">
        {/* used slice methos to limit display the amount of books */}
      {books.slice(0, 4).map((book, key) => (
        <div key={key} className="book--item">
          <img
            src={Object.values(book?.volumeInfo.imageLinks)[0]}
            alt="cover img"
            className="BookImg"
          />
          {/* used preview as link to look for book info */}
          <div className="book--item-btns">
            <a
              href={book.volumeInfo.previewLink}
              target="_blank"
              rel="noreferrer"
              className="preview--btn"
            >
              Preview
            </a>
            {/* used ternary operator to check book availability */}
            {book?.accessInfo.pdf["acsTokenLink"] !== undefined ? (
              <button className="read--btn" onClick={() => checkBooks(book?.id)}>Read Online</button>
            ) : (
              <h3 className="null--point">Not Available</h3>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;