import React, { useState, useEffect } from 'react'
import axios from './axios';
import "./Row.css"
import requests from './requests';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';




const baseUrl = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("");
   

    useEffect(() => {
        async function fetchData() {
            if(fetchUrl === requests.fetchFamilyTv) {
                //get familyTv and kidsTv and combinde results
                const request1 = await axios.get(requests.fetchFamilyTv);
                const request2 = await axios.get(requests.fetchKidsTv);
    
                const combined = request1.data.results.concat(request2.data.results);
      
             
                //go through combined.origonal name results and remove duplicates

              for (let i = 0; i < combined.length; i++) {
                for (let j = i + 1; j < combined.length; j++) {
                  if (combined[i].original_name === combined[j].original_name) {
                    combined.splice(j, 1);
                  }
                }
              }
              console.log(combined);
           
                setMovies(combined);
                return combined
               }
               //get all other movies
               
            const request = await axios.get(fetchUrl)

            setMovies(request.data.results)
            return request
        }
        
        fetchData()
    }, [fetchUrl]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        }
        else {
            console.log (movie?.name, movie?.title, movie?.original_name, movie?.original_title + " trailer")
            movieTrailer(movie?.name || movie?.title || movie?.original_name || movie?.original_title)
            .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                }).catch(error => console.log(error));
        }

    }




 


    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={() => { handleClick(movie) }} 
                        className= {`row_poster ${isLargeRow && 'row_posterLarge'}`}
                        src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
            {trailerUrl && <YouTube videoId = {trailerUrl} opts={opts} />}
        </div>
    )
}

export default  Row;