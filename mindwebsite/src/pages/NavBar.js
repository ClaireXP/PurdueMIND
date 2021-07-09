import './NavBar.css';
import mindLogo from '../assets/logos/mindLogo.png'
import facebookLogo from '../assets/logos/facebook.png'
import instagramLogo from '../assets/logos/instagram.png'
import twitterLogo from '../assets/logos/twitter.png'
import youtubeLogo from '../assets/logos/youtube.png'

import HomePage from './home/HomePage'
import AboutPage from './about/AboutPage'
import ProjectsPage from './projects/ProjectsPage'
import AlumniPage from './alumni/AlumniPage'
import ContactPage from './contact/ContactPage'

import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export default function NavBar() {
  const [active, setActive] = useState('Home');

  return (
    <Router>
      <div className='page'>
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

        <Switch>
          <Route exact path='/'>
            <HomePage/>
          </Route>
          <Route path='/AboutUs'>
            <AboutPage/>
          </Route>
          <Route path='/Projects'>
            <ProjectsPage/>
          </Route>
          <Route path='/Alumni'>
            <AlumniPage/>
          </Route>
          <Route path='/Contact'>
            <ContactPage/>
          </Route>
        </Switch>

        <div className='footer'>
          <div id='socials'>
          <a href='https://www.facebook.com/PurdueMIND/'>
              <img 
                  id='facebookLogo' className='socialLogo' 
                  src={facebookLogo} alt='Facebook Logo'
              />
            </a>
            <a href='https://www.instagram.com/purdue.mind/'>
              <img 
                  id='instagramLogo' className='socialLogo' 
                  src={instagramLogo} alt='Instagram Logo'
              />
            </a>
            <a href='https://twitter.com/purduemind?lang=en'>
              <img 
                  id='twitterLogo' className='socialLogo' 
                  src={twitterLogo} alt='Twitter Logo'
              />
            </a>
            <a href='https://www.youtube.com/channel/UC6Dv-UygUz6vUts8L8hGi8g/featured'>
              <img 
                id='youtubeLogo' className='socialLogo' 
                src={youtubeLogo} alt='YouTube Logo'
              />
            </a>
          </div>

          <h5>CREATED AND MAINTAINED BY PURDUE MIND | COPYRIGHT 2021 | ALL RIGHTS RESERVED</h5>
        </div>
      </div>
    </Router>
  );
};
