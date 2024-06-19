import { useEffect, useState } from "react";
import "./App.css";
// https://www.googleapis.com/books/v1/volumes?q=java&key=AIzaSyCJbUF_JRiOk9R6abyiAZ3QddT6TQ_LAO0

//main component
function App() {
  //usestate state and setter function for usestate Hook
const[books,setBooks]=useState([]);

//using UseEffect hook for Rendering data (DOM content)
useEffect(()=>{
//  fetch(`https://www.googleapis.com/books/v1/volumes?q=${}&key=AIzaSyCJbUF_JRiOk9R6abyiAZ3QddT6TQ_LAO0`)

fetch(`https://www.googleapis.com/books/v1/volumes?q=java&key=AIzaSyCJbUF_JRiOk9R6abyiAZ3QddT6TQ_LAO0`)
.then(res=>res.json())
.then(result=>{
  setBooks(result.items)
  console.log(books);
}).catch((err)=>alert(err.message))
},[]); //giving empty array dependancy 



  return (
    <div className="APP">
      <h3>Welcome Book Club</h3>
      <h1 className="title">Look For a Book</h1>
      <form className="search--form">
        <input type="text" placeholder='search Book...' className="search--bar" />
        <button type="submit" className="search--btn">
          <img src="https://img.icons8.com/color/344/4a90e2/search--v1.png" alt="" />
        </button>
      </form>
      <div className="books">
        {books.map((book,key)=>(
         <div key={key} className="book--item">
          <img src={book.volumeInfo.imageLinks} alt="cover img" className="BookImg"/>
                  <div className="book--item-btns">
            <a href={book.volumeInfo.previewLink} target='_blank' rel='noreferrer' className="preview--bt">Preview</a>
            <button className="read--btn">Read Online</button>
          </div>
        </div>
        ))}
      </div>
</div>
      );
}
      export default App;