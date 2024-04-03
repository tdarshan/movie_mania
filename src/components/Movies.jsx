import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import axios from 'axios';

const Movies = () => {

    const [movies, setMovies] = useState([]);
    
    // Fetch movies data
    useEffect( () => {
        
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=1`).then(function(res){
            setMovies(res.data.results);
        });

        console.log(movies);

    }, []);

    console.log();

  return (
    <div className="p-5">
        <div className="text-2xl m-5 font-bold text-center">
            Trending  Now
        </div>

        <div className="flex flex-row flex-wrap justify-around gap-5">
            { movies.map((movie) => 
                <MovieCard key={movie.id} movie={movie} title={movie.original_title} poster={movie.poster_path} />
            ) }
        </div>
    </div>
  )
}

export default Movies