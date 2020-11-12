import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography,Button } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite } from '../redux/actions'



function MovieCard({movie}) {
  const {Poster, Title, Year, imdbID} = movie

  const dispatch = useDispatch()

  const movies = useSelector((state) => state.favorites)

  const foundMovie = movies.find((movie) => movie.imdbID === imdbID)


  const handleAddMovie = () => {
    dispatch(addFavorite(movie))
  }

  const handleRemoveMovie = () => {
    dispatch(deleteFavorite(imdbID))
  }


  return (
    <Card>
      <CardActionArea>
        <CardMedia style={{height:'400px'}} image={Poster} />
        <CardContent>
          <Typography variant="h5">{Title}</Typography>
          <Typography color='textSecondary'>{Year}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {foundMovie ? (
          <Button onClick={handleRemoveMovie} variant='contained'>Remove Movie</Button>
        ) : (<Button onClick={handleAddMovie} color='primary' variant='contained'>Add Movie</Button>) }
        
      </CardActions>
    </Card>
  );
}

export default MovieCard

