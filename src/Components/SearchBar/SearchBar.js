import React, { Component } from 'react';
import './SearchBar.css'

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
  
  // updateSearch = (event) => {
  //   this.props.filterMoviesDisplay(event.target.value)
  // }

  render = () => {
    return (
      <form>
        <input
          type="text"
          placeholder="Search by title or movie genres..."
          name="movie-search"
          value={this.state.searchInput}
          onChange={this.handleSearch}
        />
      </form>
    )
  }
}

// don't forget PROPTYPES
export default SearchBar