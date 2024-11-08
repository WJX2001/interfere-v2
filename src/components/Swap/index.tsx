import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  IconButton,
  makeStyles,
  Theme,
} from '@material-ui/core';

import SwapVerticalCircleIcon from '@material-ui/icons/SwapVerticalCircle';
import CoinField from './CoinField';
import { Col, Input, Row } from 'antd';
import styles from './index.module.less'
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
  switchButton: {
    display: 'flex',
    justifyContent: 'center',
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
            <Col>
              <Row className={styles['card-row']}>
                <CoinField />
              </Row>
              <Row className={styles['card-row']}>
                <IconButton
                >
                  <SwapVerticalCircleIcon
                    style={{ color: 'white' }}
                    fontSize="large"
                  />
                </IconButton>
              </Row>
              <Row className={styles['card-row']}>
                <CoinField />
              </Row>
            </Col>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Swap;
