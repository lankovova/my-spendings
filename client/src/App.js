import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Grommet } from 'grommet';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import NotFound from './components/NotFound';

const customTheme = {
  global: {
    colors: {
      custom: 'rgba(98,27,192,1)',
    },
  },
};

function App() {
  return (
    <Grommet theme={customTheme}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Grommet>
  );
}

export default App;
