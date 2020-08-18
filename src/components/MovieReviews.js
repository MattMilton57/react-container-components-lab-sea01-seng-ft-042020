import React from 'react';

const MovieReviews = ({reviews}) =>
    <div className='review-list'>
        {reviews.map(review => 
        <div className='review'>
            <h1>{review.display_title}</h1>
            <img src={review.multimedia.src}></img>
            <h3>{review.mpaa_rating }</h3>
            <h3>{review.headline}</h3>
        </div>)} 

    </div>

export default MovieReviews


// const BookList = ({ books }) => (
//     <div className="book-list">
//       { books.map(book => <Book title={book.title} img_url={book.img_url} />) }
//     </div>
//   )