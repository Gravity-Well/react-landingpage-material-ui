import React from 'react';
import Grid           from '@material-ui/core/Grid';
import Typography     from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import MainGridItem from './MainGridItem';
import GridItem from './GridItem';

const useStyles = makeStyles(theme => ({
  
  mainGridItem: {
    backgroundColor: 'blue'
  },
  secondRowFirstItem: {
    backgroundColor: 'green'
  },
  secondRowSecondItem: {
    backgroundColor: 'orange'
  },
  thirdRow: {
    backgroundColor: 'pink'
  }
  
}));

export default function GridLayout() {
  
  const classes = useStyles();
  
  return (
    <Grid container spacing={3}>
    
      <Grid item lg={12} sm={12} xs={12}>
        <MainGridItem />
      </Grid>

      <Grid item lg={6} md={12} sm={12} xs={12}>
        <GridItem 
          title="React Chart Basics"
          image="https://cdn.pixabay.com/photo/2015/09/05/22/46/business-925900_1280.jpg"
          description="In this course you will learn how to build Dashboards containing charts. The data for this course will not come from an API. See the Masterclass."
        />
      </Grid>
    
      <Grid item lg={6} md={12} sm={12} xs={12}>
        <GridItem  
          title="React Masterclass" 
          image="https://cdn.pixabay.com/photo/2021/01/21/14/44/laptop-5937580_1280.jpg"
          description="In this course we will take our knowledge of React hooks, in particular, useEffect and make calls to fech data from a back-end API"
        />
      </Grid>
    
      <Grid item lg={4} md={12} sm={12} xs={12}>
        <GridItem 
          title="3D Modeling Masterclass" 
          image="https://cdn.pixabay.com/photo/2020/01/20/19/08/modelling-4781127_1280.jpg"
          description="In this 17-course bundle, you will build low poly and high poly 3D models. Anyone can learn the free digital art software Blender. You will also learn Unity and Adobe Photoshop."
        />
      </Grid>
    
      <Grid item lg={4} md={12} sm={12} xs={12}>
        <GridItem 
          title="Business & Side Hustles" 
          image="https://cdn.pixabay.com/photo/2020/12/31/17/39/man-5877068_1280.jpg"
          description="This five-level course will take you from no experience in business into a life of financial wisdom and entrepreneurship. You will learn from a successful CEO how to be profitable."
      />
      </Grid>
    
      <Grid item lg={4} md={12} sm={12} xs={12}>
        <GridItem  
          title="Game Development Masterclass" 
          image="https://cdn.pixabay.com/photo/2020/12/31/21/03/deer-5877407_1280.jpg"
          description="This bundle of 14 Unity courses will teach you how to build games from scratch. You will learn C#, Blender, Adobe Photoshop, and Unity machine learning with Python."
        />
      </Grid>
    
    </Grid>
  );
}