import LandingGhost from '/public/resting-gho-hat-purple.svg';
import { Box, Container, Paper, Typography } from '@material-ui/core';
import styles from './index.module.less';
import { ConnectButton } from '@rainbow-me/rainbowkit';
const ConnectWallletPaper = () => {
  return (
    <div className={styles['connect-page']}>
      <Box>
        <img src={LandingGhost} />
      </Box>
      <>
        <div style={{ color: 'white',marginBottom:'10px',fontSize:'1.3125rem' }}>Please, connect your wallet</div>
        <div style={{ color: 'rgb(165, 168, 182)',fontSize:'0.875rem;' }}>
          Please connect your wallet to see your supplies, borrowings, and open
          positions.
        </div>
      </>
    </div>
  );
};

export default ConnectWallletPaper;
