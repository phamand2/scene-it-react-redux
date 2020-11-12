import { Button, Grid, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import {loading, setData, loaded} from '../redux/actions'


export default function SearchForm() {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loading())
    const encodedSearch = encodeURIComponent(search)
    fetch(`http://www.omdbapi.com/?apikey=59354c85&s=${encodedSearch}`)
    .then(res => res.json())
    .then(data => {
      dispatch(setData(data.Search))
      console.log(data)
      dispatch(loaded())
    })
    }


  return (
    
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
  
  )
}
