import { Button, Container, Typography, Grid, InputBase } from '@material-ui/core';
import './App.css';
import MovieCard from './components/MovieCard';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {setData} from './redux/actions'
import SearchIcon from '@material-ui/icons/Search';




function App() {

  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const movies = useSelector((state)=> state.results)


  const handleSubmit = (e) => {
    e.preventDefault()
    const encodedSearch = encodeURIComponent(search)
    fetch(`http://www.omdbapi.com/?apikey=59354c85&s=${encodedSearch}`)
    .then(res => res.json())
    .then(data => {
      dispatch(setData(data.Search))
      console.log(data)
    })
    }
  

  return (
    <Container>
      <Typography variant="h1" align="center">
        Scene It!
      </Typography>
      <Grid container direction="row" justify="center" alignItems="center">
        <form onSubmit={handleSubmit}>
          <div  style={{boxShadow:'5px 10px #888888', backgroundColor: "lightcyan"}}>
            <InputBase value={search} onChange={(e) => {
                setSearch(e.target.value);
              }}  placeholder='Search Movies' inputProps={{'aria-label': 'search movies' }} />
            <Button type='submit'><SearchIcon /></Button>
          </div>
        </form>
      </Grid>
      <Grid container spacing={3}>
        {movies.map((movie) => {
          return (
            <Grid item xs={3} key={movie.imdbID}>
              <MovieCard movie={movie} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default App;
