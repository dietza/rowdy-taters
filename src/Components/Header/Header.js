import React from 'react';
import { Route }from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';

const Header = ({ filterMoviesDisplay }) => {
  return (
    <header className="header">
    <h1 className="header-title">Rowdy Taters!</h1>
    <Route exact path='/' 
      render={ () => { 
        return <SearchBar filterMoviesDisplay={ filterMoviesDisplay }/>
      }}/>
    </header>
  )
}

Header.propTypes = {
  filterMoviesDisplay: PropTypes.func
}

export default Header; 