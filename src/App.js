import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Dashboard from './pages/dashboard/Dashboard';
import WebDev from './pages/projectPages/WebDev';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/web-dev' component={WebDev} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
