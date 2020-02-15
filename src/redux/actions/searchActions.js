import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, SET_LOADING} from './types'
import axios from 'axios'
import { apiKey} from '../../apikey'
export const searchMovie = (text) => dispatch =>
{
    dispatch(
        {
            type: SEARCH_MOVIE,
            payload: text
        }
    )
}

export const fetchMovies = (text) => dispatch =>
{
    axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${text}`).then(result =>
    {
        dispatch(
            {
                type: FETCH_MOVIES,
                payload: result.data
            }
        )
    }).catch(e => console.log(e))
}

export const fetchMovie = (id) => dispatch =>
{
    axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`).then(result =>
    {
        dispatch(
            {
                type: FETCH_MOVIE,
                payload: result.data
            }
        )
    }).catch(e => console.log(e))
}

export const setLoading = () => 
{
    return  {
                type: SET_LOADING
            }
}