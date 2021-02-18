import { Grid, Typography } from '@material-ui/core'
import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import MainGridItem from './MainGridItem';

const useStyles = makeStyles((theme) => ({
  
  mainGridItem: {
  
  }
  
}));

function GridLayout() {

    const classes = useStyles()
    return (
        <Grid container spacing={3}>
            <Grid item lg={12} sm={12} xs={12}> 
            <MainGridItem/>

            </Grid>
            <Grid item sm={6} xs={12}>
                <Typography className={classes.secondRow}>

                </Typography>
             
            </Grid>
            <Grid>
             
             </Grid>
        </Grid>
    )
}

export default GridLayout
