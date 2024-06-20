// import React from 'react';
// import { Carousel } from 'react-bootstrap';
// // import 'bootstrap/dist/css/bootstrap.min.css';


// const CarouselComponent = ({ books }) => {
//     return (
//       <div id="CarouselComponent" className="carousel slide" data-bs-ride="carousel">
//         <div className="carousel-inner">
//           {books.map((book, index) => (
//             <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
//               <img src={book.volumeInfo.imageLinks.thumbnail} className="d-block w-100" alt={book.volumeInfo.title} />
//               <div className="carousel-caption d-none d-md-block">
//                 <h5>{book.volumeInfo.title}</h5>
//                 <p>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button className="carousel-control-prev" type="button" data-bs-target="#bookCarousel" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#bookCarousel" data-bs-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     );
//   };
  
//   export default CarouselComponent;