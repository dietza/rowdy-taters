import React from 'react';
import './Header.css'
import SearchBar from '../SearchBar/SearchBar'

const Header = ({ filterMoviesDisplay }) => {
  return (
    <>
    <h1 className="header">Rowdy Taters!</h1>
    <SearchBar filterMoviesDisplay={ filterMoviesDisplay }/>
    </>
  )
}

export default Header 