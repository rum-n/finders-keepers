import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
