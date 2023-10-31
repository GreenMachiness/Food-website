//** Import Statements
import React, { useState, useEffect } from "react"
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import Card from './Card'
import Grid from '@mui/material/Grid';


//** Setup (define helper functions and variables here)

function Recipe(props) {
  //** Destructure Props
  const {
    data,
    error
  } = props

  if (error) {
    return <div>Error: {error}</div>
  }
  

  // if (data.length === 0) {
  //   return (
  //     <Backdrop
  //       sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  //       open={true}
  //     >
  //       <CircularProgress color="inherit" />
  //     </Backdrop>
  //   );
  // }

  //** Return JSX
  return (
    <Grid
    container
    direction="row"
    justifyContent="space-around"
    alignItems="flex-start"
    rowSpacing={4}
    columnSpacing={1}
    >

      {data.map((data, index) => {
        console.log('title: ', data.hits.recipe)
        
        return (
          <Grid item xs={12} sm={9} md={6} lg={3} xl={1}>
          {/* <Card
          title={data.hits[index].recipe.label}
          image={data.hits[index].recipe.image}
          calories={data.hits[index].recipe.calories}
          servingCount={data.hits[index].recipe.yield}
          /> */}
          </Grid>
          

          
        )
      })}

    </Grid>
  )
}

export default Recipe;
