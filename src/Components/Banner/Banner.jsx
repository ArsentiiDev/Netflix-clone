import axios from '../../FetchData/axios'
import React, { useEffect, useState } from 'react'
import './banner.css'
import requests from '../../FetchData/Requests'


function Banner() {

    function truncate(string,n) {

        return string?.length > n ? 
        string.substring(0, n-1)+ '...':
        string

    }

    const [movie,setMovie] = useState([])

    useEffect(()=>{

        async function fetch(){
            const request = await axios.get(requests.fetchNetflixOriginals)
           
            setMovie(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length - 1)
                ]
            )
            return request
        }
        fetch()

    }, [])

    console.log(movie)

    return (
        <header className="banner" style={{
            backgroundSize: 'cover',
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: 'center center'
        }}
        >
            <div className="banner__content">
                <h1 className="banner__title">{movie?.name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(`${movie?.overview}`,150)}
                </h1>
            </div>

            {/* <div className="banner--fadeBottom" /> */}
        </header>
        
    )
}

export default Banner
