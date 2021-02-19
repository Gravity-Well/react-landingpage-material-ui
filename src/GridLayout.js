import React from 'react';
import Grid           from '@material-ui/core/Grid';

import MainGridItem from './MainGridItem';
import GridItem from './GridItem';

export default function GridLayout() {
    
  return (
    <Grid container spacing={3}>
    
      <Grid item lg={12} sm={12} xs={12}>
        <MainGridItem />
      </Grid>

      <Grid item lg={6} md={12} sm={12} xs={12}>
        <GridItem 
          title="React Charts and Dashboards"
          image="https://cdn.pixabay.com/photo/2015/09/05/22/46/business-925900_1280.jpg"
          description="Learn to master charts and embedding charts in to dashboards for the ultimate data analytics display"
        />
      </Grid>
    
      <Grid item lg={6} md={12} sm={12} xs={12}>
        <GridItem  
          title="Node RESTful API Masterclass" 
          image="https://cdn.pixabay.com/photo/2021/01/21/14/44/laptop-5937580_1280.jpg"
          description="Master back-end development with hands-on course using nodejs, express and PostgreSQL database"
        />
      </Grid>
    
      <Grid item lg={4} md={12} sm={12} xs={12}>
        <GridItem 
          title="JavaScript Basics" 
          image="https://cdn.pixabay.com/photo/2020/01/20/19/08/modelling-4781127_1280.jpg"
          description="In this course you will master the basics of JavaScript."
        />
      </Grid>
    
      <Grid item lg={4} md={12} sm={12} xs={12}>
        <GridItem 
          title="Intermediate JavaScript" 
          image="https://cdn.pixabay.com/photo/2020/12/31/17/39/man-5877068_1280.jpg"
          description="This course will expand on the JavaScript basics and move you into the world of data structures."
      />
      </Grid>
    
      <Grid item lg={4} md={12} sm={12} xs={12}>
        <GridItem  
          title="Introduction to React" 
          image="https://cdn.pixabay.com/photo/2020/12/31/21/03/deer-5877407_1280.jpg"
          description="Take your JavaScript to the next level by learning the most popular JavaScript library."
        />
      </Grid>
    
    </Grid>
  );
}