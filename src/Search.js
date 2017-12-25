import React, { Component } from'react';
import * as BooksAPI from './BooksAPI';

class Search extends Component {
  state = {
    queryString: '',
    bookResults: [],
    error: ''
  };

  handleSearch(e) {
    this.setState({
      queryString: e.target.value
    });

    // Get the search results
    BooksAPI.search(this.state.queryString).then((books) => {
      console.log(books);
      this.setState({
        bookResults: books
      });
    });
  }

  render() {
    return (
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" href="/"></a>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <input type="text" placeholder="Search by title or author" onChange={this.handleSearch.bind(this)} value={this.state.queryString}/>

        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
  );
  }
}

export default Search;
