import React from 'react';
import ImageList from './ImageList'
import SearchBar from './SearchBar'

const Search = () => {
    return (
        <div className = "ui container">
            <SearchBar/>
            <ImageList/>
         </div>
    );
}
export default Search;