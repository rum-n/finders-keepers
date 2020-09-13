import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Dashboard from './pages/dashboard/Dashboard';
import WebDev from './pages/projectPages/WebDev';
import UxUi from './pages/projectPages/UxUi';
import GraphicDesign from './pages/projectPages/GraphicDesign';
import MobileDev from './pages/projectPages/MobileDev';
import ProjectPage from './pages/ProjectPage/ProjectPage';
// import { PostsProvider } from './context/Posts';

function App() {
  return (
    
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/web-dev' component={WebDev} />
          <Route path='/ux-ui-design' component={UxUi} />
          <Route path='/graphic-design' component={GraphicDesign} />
          <Route path='/mobile-development' component={MobileDev} />
          <Route path='/:id' component={ProjectPage} />
        </Switch>
        <Footer/>
      </Router>
    
  );
}

export default App;
