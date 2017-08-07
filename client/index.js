import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import App from './components/App';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';

const client = new ApolloClient({});

const Root = () => {
  return (
    <Router>
      <ApolloProvider client={client}>
        <App>
          <Route exact path="/" component={SongList} />
          <Route path="/song/new" component={SongCreate} />
        </App>
      </ApolloProvider>
    </Router>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
