import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from './Header';
import BookList from './BookList';

class BooksApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };

    this.retrieveBooks = this.retrieveBooks.bind(this);
  }

  componentDidMount() {
    // retrieve all of users books
    this.retrieveBooks();
  }

  retrieveBooks = () => {
    BooksAPI.getAll().then((books) => {
      console.log(books);
      this.setState({ books });
    });
  }

  handleShelfChange = (book, newShelf) => {
    console.log("changing shelf!", book, newShelf);
    // Update the bookshelf on API
    BooksAPI.update(book, newShelf).then((data) => {
      console.log(data);
      this.retrieveBooks();
    });
  }

  render() {

    //TODO: Set up React router with paths for the root and search paths 
    return (
      <div className="app">
          <div className="list-books">
            <Header />
            <BookList books={this.state.books} onShelfChange={this.handleShelfChange} />
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
      </div>
    )
  }
}

export default BooksApp
