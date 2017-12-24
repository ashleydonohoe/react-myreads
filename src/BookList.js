import React, { Component } from 'react';
import BookShelf from './BookShelf';

class BookList extends Component {

  filterBooks(shelf) {
    return this.props.books.filter(book => book.shelf === shelf);
  }

   render() {
     return (
       <div className="list-books-content">
         <div>
          <BookShelf title="Want to Read" books={this.filterBooks("wantToRead")} />
          <BookShelf title="Currently Reading" books={this.filterBooks("currentlyReading")} />
          <BookShelf title="Read" books={this.filterBooks("read")} />
          </div>
       </div>
     )
   }
}

export default BookList;
