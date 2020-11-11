import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography,Button } from '@material-ui/core'
import React from 'react'



function MovieCard({movie}) {


  return (
    <Card>
      <CardActionArea>
        <CardMedia style={{height:'400px'}} image={movie.Poster} />
        <CardContent>
          <Typography variant="h5">{movie.Title}</Typography>
          <Typography color='textSecondary'>{movie.Year}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color='primary'>Add Movie</Button>
      </CardActions>
    </Card>
  );
}

export default MovieCard

