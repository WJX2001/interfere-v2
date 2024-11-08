import { MENUITEMS } from '@/Constant/constant';
import { Button, List, ListItem, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
  ListContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  listItem: {
    width: '100%',
    marginRight: 2,
  },
  buttonItem: {
    color: '#F1F1F3',
    p: '6px 8px',
    position: 'relative',
    '.active&:after, &:hover&:after': {
      transform: 'scaleX(1)',
      transformOrigin: 'bottom left',
    },
    '&:after': {
      content: "''",
      position: 'absolute',
      width: '100%',
      transform: 'scaleX(0)',
      height: '2px',
      bottom: '-6px',
      left: '0',
      background: 'linear-gradient(248.86deg, #B6509E 10.51%, #2EBAC6 93.41%)',
      transformOrigin: 'bottom right',
      transition: 'transform 0.25s ease-out',
    },
  },
}));

const NavItems = () => {
  const classes = useStyles();
  return (
    <List className={classes.ListContainer}>
      {MENUITEMS.map((item, index) => (
        <ListItem key={index}>
          <Button className={classes.buttonItem}>{item.title}</Button>
        </ListItem>
      ))}
    </List>
  );
};

export default NavItems;
