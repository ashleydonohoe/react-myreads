import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from './Header';
import BookList from './BookList';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    // retrieve all of users books
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  render() {
    return (
      <div className="app">
          <div className="list-books">
            <Header />
            <BookList books={this.state.books} />
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
