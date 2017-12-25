import React, { Component } from'react';
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';

class Search extends Component {
  state = {
    queryString: '',
    bookResults: [],
    error: false
  };

  handleSearch(e) {
    // Set query string in state
    const queryString = e.target.value;
    this.setState({
      queryString
    });

    // Get search results if there's currently a queryString
    if(queryString) {
      BooksAPI.search(queryString).then((books) => {
        // If books has at least 1 book in it, update state with these new books
        if(books.length > 0) {
          this.setState({
            bookResults: books,
            error: false
          });
          // if there is no books, there's an error somewhere. Clear books list
        } else {
          this.setState({
            error: true,
            bookResults: []
          });
        }
      });
    }
  }

  renderResults() {
    // Render the bookshelf if there are books in the array
    // Render no results message otherwise
    const {bookResults} = this.state;
    const content = bookResults.length > 0 ? <BookShelf books={bookResults} title="Book results" onShelfChange={this.props.onShelfChange} /> : "No Results yet";
    return content;
  }

  render() {
    return (
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" href="/"></a>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" onChange={this.handleSearch.bind(this)} value={this.state.queryString}/>

        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
        { this.renderResults()}
        </ol>
      </div>
    </div>
  );
  }
}

export default Search;
