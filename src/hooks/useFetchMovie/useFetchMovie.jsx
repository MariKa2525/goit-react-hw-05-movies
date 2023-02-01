import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovieById } from 'services/moviesApi'

export const useFetchMovie = () => {
    const[movie, setMovie]=useState(null)
    const {movieId} = useParams()

    useEffect(() => {
        fetchMovieById(movieId).then(setMovie)
    }, [movieId])
// console.log(movieId)
    return movie

}

