import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component {
  renderBooks() {
    // Renders books for shelf
    const { books, onShelfChange } = this.props;
    return books.map((book, id) => {
      return (
        <Book key={id} book={book} onShelfChange={onShelfChange} />
      )
    })
  }
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ this.props.title }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { this.renderBooks() }
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf;
