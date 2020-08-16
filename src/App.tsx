import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Launches from './components/Launches';
import Launch from './components/Launch';

const client = new ApolloClient({
  uri: 'http://api.spacex.land/graphql/',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <h1>SpaceX</h1>
          <Routes>
            <Route path="/" element={<Launches />} />
            <Route path="launch/:id" element={<Launch />} />
          </Routes>
        </Router>
      </div>
      </ApolloProvider>
  );
}

export default App;
