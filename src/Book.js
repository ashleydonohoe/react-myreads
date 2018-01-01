import React from 'react';

const Book = ({book, onShelfChange}) => {
  const { title, subtitle, authors, imageLinks, shelf } = book;
  const currentShelf = shelf ? shelf : "no-shelf";
  const fullTitle = subtitle ? `${title} - ${subtitle}` : title;
  const fullAuthors = authors ? authors.join(', ') : '';
  // Used bookcover placeholder suggested by reviewer when no thumbnail is available
  const bookImageURL = imageLinks ? imageLinks.thumbnail : 'http://via.placeholder.com/128x193?text=No%20Cover';

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookImageURL})` }}></div>
          <div className="book-shelf-changer">
            <select onChange={e => onShelfChange(book, e.target.value)} value={currentShelf}>
              <option value="no-shelf" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{ fullTitle }</div>
        <div className="book-authors">{ fullAuthors }</div>
      </div>
    </li>
  );
}

export default Book;
