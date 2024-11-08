import { ThemeProvider } from '@material-ui/core';

import './App.css';

import { SnackbarProvider } from 'notistack';
import React from 'react';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <div
      id="app"
      className="container-fluid bg-gradient-custom"
      style={{ backgroundImage: 'linear-gradient(to right, #17081E, #282b30)' }}
    >
      <SnackbarProvider maxSnack={3}>
        <ThemeProvider>
          <React.Fragment>
            <Navbar />
          </React.Fragment>
        </ThemeProvider>
      </SnackbarProvider>
    </div>
  );
}

export default App;
