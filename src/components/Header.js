import React from 'react';
import "./header.css";

// import link
import { Link } from 'react-router-dom';
// import logo
import Logo from '../assets/img/logo.svg';

const Header = () => {
  return (
    <header >
      <div className='container'>
        <Link to='/'>
          <h3>Easterly<span>.</span></h3>
        </Link>
        <div className='login1'>
          <Link className='login 2' to='/'>
            Log in
          </Link>
          <Link
            className='signup'
            to='/'
          >
            Sign up
          </Link>
        </div>
      </div>
      <hr style={{width:"90%"}}></hr>
    </header>
  );
};

export default Header;
