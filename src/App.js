import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Hats from './pages/hats/Hats';
import HomePage from './pages/homepage/HomePage';
import './App.scss';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
