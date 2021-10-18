import './App.css';
import NavBar from './pages/NavBar';
import Footer from './pages/Footer';
import HomePage from './pages/home/HomePage'
import AboutPage from './pages/about/AboutPage'
import ProjectsPage from './pages/projects/ProjectsPage'
import AlumniPage from './pages/alumni/AlumniPage'
import ContactPage from './pages/contact/ContactPage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
    <div className='App'>
      <link rel='preconnect' href='https://fonts.googleapis.com'/>
      <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin/>
      <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap' rel="stylesheet" />
        
      <NavBar />

      <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/PurdueMIND/'>
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
      
      <Footer/>
      </div>
    </Router>
  );
};
