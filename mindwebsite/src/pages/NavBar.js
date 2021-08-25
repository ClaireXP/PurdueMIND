import './NavBar.css';
import mindLogo from '../assets/logos/mindLogo.png'

import React, { useState } from 'react';
import {Link} from 'react-router-dom';

export default function NavBar() {
  const [active, setActive] = useState('Home');

  return (
    <div className='navBar'>
      <Link to='/'>
        <button className='btn' id='mindLogoBtn'>
          <img 
              id='mindLogo' src={mindLogo} alt='MIND Logo' 
              onClick={() => setActive('Home')}
          />
        </button>
      </Link>

      <div id='navPaths'>
        <Link to='/'>
          <button 
              className={`btn navBtn ${active === 'Home' ? 'activeBtn' : ''}`}
            onClick={() => setActive('Home')}
          >Home</button>
        </Link>

        <Link to='/AboutUs'>
          <button 
              className={`btn navBtn ${active === 'About Us' ? 'activeBtn' : ''}`}
              onClick={() => setActive('About Us')}
          >About Us</button>
        </Link>

        <Link to='/Projects'>
          <button 
              className={`btn navBtn ${active === 'Projects' ? 'activeBtn' : ''}`}
              onClick={() => setActive('Projects')}
          >Projects</button>
        </Link>

        <Link to='/Alumni'>
          <button 
              className={`btn navBtn ${active === 'Alumni' ? 'activeBtn' : ''}`}
              onClick={() => setActive('Alumni')}
          >Alumni</button>
        </Link>

        <Link to='/Contact'>
          <button 
              className={`btn navBtn ${active === 'Contact' ? 'activeBtn' : ''}`}
              onClick={() => setActive('Contact')}
          >Contact</button>
        </Link>
      </div>
    </div>
  );
};
