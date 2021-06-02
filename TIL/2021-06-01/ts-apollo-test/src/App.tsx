import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import client from './apollo';
import { Home, PageNotFound } from 'routes';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
