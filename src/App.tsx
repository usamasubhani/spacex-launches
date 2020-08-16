import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks'; 
import './App.css';
import Launches from './components/Launches';

const client = new ApolloClient({
  uri: 'http://api.spacex.land/graphql/',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>SpaceX</h1>
        <Launches />
      </div>
      </ApolloProvider>
  );
}

export default App;
