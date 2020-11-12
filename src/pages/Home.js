import { Grid, Typography } from '@material-ui/core';
import React from 'react'
import MovieCard from '../components/MovieCard';
import { useSelector } from 'react-redux';
import SearchForm from '../components/SearchForm';
import { Link } from 'react-router-dom';

export default function Home() {
  const movies = useSelector((state) => state.results)


  return (
    <>
    <Typography variant="h1" align="center">
        Scene It!
      </Typography>
      <Link to='/favorites'>Favorites</Link>
      <SearchForm />
      
      <Grid container spacing={3}>
        {movies.map((movie) => {
          return (
            <Grid item xs={3} key={movie.imdbID}>
              <MovieCard movie={movie} />
            </Grid>
          );
        })}
      </Grid>
      </>
  )
}
