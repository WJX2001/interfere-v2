import { Button, Card, Container, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import styles from './index.module.less';
import ConnectWallletPaper from '../ConnectWallletPaper';
import { useAccount } from 'wagmi';

const MainPage = () => {
  const { isConnected } = useAccount();
  return (
    <>
      {isConnected ? (
        <Container className={styles['container']}>
          <Card
            className={styles['paperContainer']}
            style={{ backgroundColor: '#292e41' }}
          >
            <h1 className={styles['title']}>Welcome to MoDex</h1>
          </Card>
        </Container>
      ) : (
        <ConnectWallletPaper />
      )}
    </>
  );
};

export default MainPage;
