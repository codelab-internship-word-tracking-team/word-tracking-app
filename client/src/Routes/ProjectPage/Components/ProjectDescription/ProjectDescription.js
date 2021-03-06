// React Imports
import React from 'react';

// Material UI Imports
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  title: {
    marginTop: '3vh',
  },
  author: {
    paddingBottom: '1vh',
    color: '#424242',
  },
  description: {
    paddingBottom: '2vh',
    marginTop: '1vh',
    marginBottom: '1vh',
  },
});

export default function ProjectDescription({ project }) {
  const classes = useStyles();

  if (project.length > 0) {
    const { title, description } = project[0];

    return (
      <Grid container direction="column" justify="space-between">
        <Typography variant="h3" className={classes.title}>{title}</Typography>
        {/* <Typography variant="h4" className={classes.author}>{`by ${author}`}</Typography> */}
        <Typography variant="body1" className={classes.description}>{description}</Typography>
      </Grid>
    );
  }

  return null;
}
