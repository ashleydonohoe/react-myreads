import React, { Component } from 'react';
import BookShelf from './BookShelf';

class BookList extends Component {
   render() {
     const { books } = this.props;
     return (
       <div className="list-books-content">
         <div>
          <BookShelf title="Want to Read" bookStatus="wantToRead"/>
          <BookShelf title="Currently Reading" bookStatus="currentlyReading" />
          <BookShelf title="Read" bookStatus="read" />
          <BookShelf title="None" bookStatus="none" />
          </div>
       </div>
     )
   }
}

export default BookList;
