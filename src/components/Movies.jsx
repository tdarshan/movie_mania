/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import Pagination from "./Pagination";
import axios from 'axios';

const Movies = ({ handleAddToWatchlist, handleRemoveFromWatchlist, watchList }) => {

    const [movies, setMovies] = useState([]);

    const [pageNo, setPageNo] = useState(1);


    const handlePrev = () => {


        if (pageNo <= 1) {
            setPageNo(1);
        }
        else {
            setPageNo(pageNo - 1);
        }
    }

    const handleNext = () => {
        setPageNo(pageNo + 1);
    }


    // Fetch movies data
    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=${pageNo}`).then(function (res) {
            setMovies(res.data.results);
        });

    }, [pageNo, setPageNo]);

    return (
        <div className="p-5">
            <div className="text-2xl m-5 font-bold text-center">
                Trending  Now
            </div>

            {/* <div className="flex flex-row flex-wrap justify-around gap-5"> */}
            <div className="grid grid-cols-5 gap-5 justify-items-center">
                {movies.map((movie) =>
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        title={movie.original_title}
                        poster={movie.poster_path}
                        watchList={watchList}
                        handleAddToWatchlist={handleAddToWatchlist}
                        handleRemoveFromWatchlist={handleRemoveFromWatchlist} />
                )}
            </div>

            <Pagination handlePrev={handlePrev} handleNext={handleNext} pageNo={pageNo} />
        </div>
    )
}

export default Movies