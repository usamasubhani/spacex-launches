import React, { useState } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Launches from './components/Launches';
import Launch from './components/Launch';
import { ThemeProvider, createMuiTheme, Paper } from '@material-ui/core';

const client = new ApolloClient({
  uri: 'http://api.spacex.land/graphql/',
});

function App() {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };
  const theme = createMuiTheme({
    palette: {
      type: palletType
    },
  })
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Paper>
          <div className="App">
            <Router>
              <Navigation toggle={handleThemeChange} />
              <Routes>
                <Route path="/" element={<Launches />} />
                <Route path="launch/:id" element={<Launch />} />
              </Routes>
            </Router>
          </div>
        </Paper>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
