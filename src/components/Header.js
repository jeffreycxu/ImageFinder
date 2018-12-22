import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header ui secondary pointing menu">
      <Link to="/" className="item">
        ImageFinder
      </Link>
      <div className="right menu">
        <Link to="/favorites" className="item">
          Favorites
        </Link>
      </div>
    </div>
  );
};

export default Header;