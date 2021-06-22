import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Detail } from '../routes';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/detail/:id" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
