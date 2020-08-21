// React Imports
import React from 'react';

// Material UI imports
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Component Imports
import NewProjectModal from '../../Components/NewProjectModal';

// Material UI Styling
const useStyles = makeStyles({
  showProjectsTitle: {
    marginTop: "5vh",
    marginBottom: "3vh",
  },
});

export default function ShowProjects({ getToken, focusProject }) {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" className={classes.showProjectsTitle}>Your Projects</Typography>

      {/* Add New Project/ */}
      <Grid container alignItems="flex-start" justify="flex-end" direction="row">
        <NewProjectModal getToken={getToken} />
      </Grid>
    </div>
  );
}
