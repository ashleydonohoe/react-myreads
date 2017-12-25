import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom';
import Header from './Header';
import BookList from './BookList';
import Search from './Search';

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
    const { books } = this.state;
    //TODO: Set up React router with paths for the root and search paths
    return (
      <div className="app">
        <Route path="/search" render={( { history } ) => (
          <h1>Search Page</h1>
        )}/>

        <Route exact path="/" render={() => (
          <div className="list-books">
            <Header />
            <BookList books={ books} onShelfChange={this.handleShelfChange} />
            <div className="open-search">
              <a href="/search">Add a book</a>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
