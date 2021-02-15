import React from 'react';
import './Header.css'
import SearchBar from '../SearchBar/SearchBar'

const Header = ({ filterMoviesDisplay }) => {
  return (
    <header className="header">
    <h1 className="header-title">Rowdy Taters!</h1>
    <SearchBar filterMoviesDisplay={ filterMoviesDisplay }/>
    </header>
  )
}

export default Header 