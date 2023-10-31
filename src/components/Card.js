import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
    const {title, image, calories, servingCount} = props
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" color="primary.main">
        {title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        {calories}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        {servingCount}
        </Typography>



      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}