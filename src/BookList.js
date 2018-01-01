import React, { Component } from 'react';
import BookShelf from './BookShelf';

class BookList extends Component {

  filterBooks(shelf) {
    return this.props.books.filter(book => book.shelf === shelf);
  }

   render() {
     const { onShelfChange } = this.props;
     return (
       <div className="list-books-content">
         <div>
          <BookShelf title="Want to Read" books={this.filterBooks("wantToRead")} onShelfChange={onShelfChange} />
          <BookShelf title="Currently Reading" books={this.filterBooks("currentlyReading")} onShelfChange={onShelfChange} />
          <BookShelf title="Read" books={this.filterBooks("read")} onShelfChange={onShelfChange} />
          </div>
       </div>
     )
   }
}

export default BookList;
