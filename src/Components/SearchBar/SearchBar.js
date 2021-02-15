import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

class SearchBar extends Component {
  constructor({ filterMoviesDisplay }) {
    super()
    this.state = {
      searchInput: '',
    }
  }

  handleSearch = (event) => {
    this.setState({
      searchInput: event.target.value
    })
    this.props.filterMoviesDisplay(event.target.value)
  }

  render = () => {
    return (
      <form autoComplete="off">
        <input
          className="search-input"
          type="text"
          placeholder="Search by movie title..."
          name="movie-search"
          value={this.state.searchInput}
          onChange={(event) => this.handleSearch(event)}
        />
      </form>
    )
  }
}

SearchBar.propTypes = {
  filterMoviesDisplay: PropTypes.func.isRequired
}
export default SearchBar