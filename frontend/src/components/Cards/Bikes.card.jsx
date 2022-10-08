import propTypes from 'prop-types';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { API_URL } from 'api/apiUrl';

export function BikesCard({
  id, model, color, location, price, image, rating,
}) {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={`${API_URL}${image}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { model }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Color:
            {' '}
            { color }
            Location:
            {' '}
            { location }
            Price:
            {' '}
            { price }
            Rating:
            {' '}
            { rating }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Reserve:
          {' '}
          { id }
        </Button>
      </CardActions>
    </Card>
  );
}

BikesCard.propTypes = {
  image: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  model: propTypes.string.isRequired,
  color: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  rating: propTypes.number.isRequired,
};
