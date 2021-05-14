import React from 'react';
import Button from '@material-ui/core/Button';
import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { SignIn } from './pages/Singin';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/singin" component={SignIn} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
