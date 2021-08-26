import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">add</Button>
      <Button variant="contained" color="primary">
        add
      </Button>
      <Button variant="contained" disabled>
        Remove
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Archive
      </Button>
    </div>
  );
}