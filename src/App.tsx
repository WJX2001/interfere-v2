import { ThemeProvider } from '@material-ui/core';
import styles from './App.module.less';

import { SnackbarProvider } from 'notistack';
import React from 'react';
import Navbar from './components/NavBar/Navbar';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Swap from './components/Swap';
import { Col, Row } from 'antd';
function App() {
  return (
    <div id="app" style={{ backgroundColor: '#1B2030', height: '100vh' }}>
      <SnackbarProvider maxSnack={3}>
        <ThemeProvider>
          <React.Fragment>
            <Navbar />
            <div style={{paddingTop: '40px'}}>
              <Row>
                <Col span={8}></Col>
                <Col span={8}>
                  <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/swap" element={<Swap />} />
                  </Routes>
                </Col>
                <Col span={8}></Col>
              </Row>
            </div>
          </React.Fragment>
        </ThemeProvider>
      </SnackbarProvider>
    </div>
  );
}

export default App;
