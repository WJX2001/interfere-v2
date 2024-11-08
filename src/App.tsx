import { ThemeProvider } from '@material-ui/core';
import styles from './App.module.less'


import { SnackbarProvider } from 'notistack';
import React from 'react';
import Navbar from './components/NavBar/Navbar';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <div
      id="app"
      style={{ backgroundColor: '#1B2030',height:'100vh' }}
    >
      <SnackbarProvider maxSnack={3}>
        <ThemeProvider>
          <React.Fragment>
            <Navbar />
            <Routes>
                <Route path='/' element={<MainPage />}/>
               </Routes>
          </React.Fragment>
        </ThemeProvider>
      </SnackbarProvider>
    </div>
  );
}

export default App;
