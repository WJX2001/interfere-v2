import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import NavItems from './components/NavItems/NavItems';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from './index.module.less'
const useStyles = makeStyles((theme) => ({
  container: {
    height: '35px',
    position: 'sticky',
    top: 0,
    transition: theme.transitions.create('top'),
    zIndex: theme.zIndex.appBar,
    backgroundColor: '#1B2030',
    display: 'flex',
    alignItems: 'center',
    padding: '8px 8px 8px 20px',
    boxShadow: 'inset 0px -1px 0px rgba(242, 243, 247, 0.16)',
  },
  logo: {
    transition: '0.3s ease all',
    '&:hover': { opacity: 0.7 },
    lineHeight: 0,
    marginRight: '3px',
  },
  connect_Button: {
    display: 'flex',
    flexDirection: 'row-reverse',
    flex: 1,
    height: '35px'
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <Box component="header" className={classes.container}>
        <Box className={classes.logo}>
          <a className="navbar col-1" href="/">
            <img src="logo.png" height="24" />
          </a>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <NavItems />
        </Box>
        <Box className={styles['connect-button']}>
          <ConnectButton label={'Connect wallet'}/>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
