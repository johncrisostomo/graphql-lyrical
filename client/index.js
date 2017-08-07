import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import SongList from './components/SongList';

const client = new ApolloClient({});

const Root = () => {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div>
          <Route path="/" component={SongList} />
        </div>
      </ApolloProvider>
    </Router>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
