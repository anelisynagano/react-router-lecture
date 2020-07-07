import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={User} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </>
  );
}

export default App;
