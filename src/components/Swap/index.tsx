import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  makeStyles,
  Theme,
} from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme: Theme) => ({
  paperContainer: {
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(3),
  },
  fullWidth: {
    width: '100%',
  },
  title: {
    textAlign: 'center',
    padding: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
  },
  hr: {
    width: '100%',
  },
  balance: {
    padding: theme.spacing(1),
    overflow: 'wrap',
    textAlign: 'center',
  },
  footer: {
    marginTop: '285px',
  },
}));
const Swap = () => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Card
          className={classes.paperContainer}
          style={{ backgroundColor: 'rgb(32,34,49)' }}
        >
          <CardHeader title="Swap" style={{ color: 'white' }} />
          <CardContent>
            <Grid
              container
              direction="column"
              alignItems="center"
              spacing={2}
            >
              22222
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Swap;
